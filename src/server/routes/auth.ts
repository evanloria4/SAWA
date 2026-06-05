import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import prisma from '../lib/prisma';
import { requireAuth, AuthRequest } from '../middleware/auth';

const router = Router();

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
};

function signToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '24h' });
}

function mailer() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    res.status(409).json({ error: 'An account with that email already exists' });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      profile: {
        create: { firstName, lastName },
      },
    },
  });

  const token = signToken(user.id);
  res.cookie('token', token, COOKIE_OPTS).status(201).json({ id: user.id, email: user.email });
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    res.status(404).json({ error: 'No account found with that email' });
    return;
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    res.status(401).json({ error: 'Incorrect password' });
    return;
  }

  const token = signToken(user.id);
  res.cookie('token', token, COOKIE_OPTS).json({ id: user.id, email: user.email, role: user.role });
});

// POST /api/auth/logout
router.post('/logout', (_req: Request, res: Response): void => {
  res.clearCookie('token').json({ message: 'Logged out' });
});

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  // Always respond the same way to prevent email enumeration
  res.json({ message: 'If that email exists, a reset link has been sent' });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return;

  const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '15m' });
  const resetUrl = `${process.env.APP_URL}/reset-password?token=${resetToken}`;

  await mailer().sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Reset your SAWA password',
    html: `<p>Click the link below to reset your password. This link expires in 15 minutes.</p>
           <a href="${resetUrl}">${resetUrl}</a>`,
  });
});

// POST /api/auth/reset-password
router.post('/reset-password', async (req: Request, res: Response): Promise<void> => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    res.status(400).json({ error: 'Token and new password are required' });
    return;
  }

  let payload: { userId: string };
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
  } catch {
    res.status(400).json({ error: 'Reset link is invalid or has expired' });
    return;
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({
    where: { id: payload.userId },
    data: { passwordHash },
  });

  res.json({ message: 'Password updated successfully' });
});

// GET /api/auth/profile
router.get('/profile', requireAuth, async (req: AuthRequest, res: Response): Promise<void> => {
  const profile = await prisma.memberProfile.findUnique({ where: { userId: req.userId } });
  if (!profile) {
    res.status(404).json({ error: 'Profile not found' });
    return;
  }
  res.json(profile);
});

// PATCH /api/auth/profile
router.patch('/profile', requireAuth, async (req: AuthRequest, res: Response): Promise<void> => {
  const { firstName, lastName, phone, practiceName, specialty, licenseNumber, licenseState, streetAddress, city, state, zip } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({ error: 'First and last name are required' });
    return;
  }

  const profile = await prisma.memberProfile.update({
    where: { userId: req.userId },
    data: { firstName, lastName, phone, practiceName, specialty, licenseNumber, licenseState, streetAddress, city, state, zip },
  });

  res.json(profile);
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req: AuthRequest, res: Response): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, role: true, profile: { select: { firstName: true, lastName: true } } },
  });
  if (!user) {
    res.status(401).json({ error: 'Not authenticated' });
    return;
  }
  res.json(user);
});

// DELETE /api/auth/account
router.delete('/account', requireAuth, async (req: AuthRequest, res: Response): Promise<void> => {
  await prisma.user.delete({ where: { id: req.userId } });
  res.clearCookie('token').json({ message: 'Account deleted' });
});

export default router;
