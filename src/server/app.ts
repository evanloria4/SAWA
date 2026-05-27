import express from 'express';
import cors from 'cors';
import path from 'path';

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(DIST_DIR));

// SPA fallback — serve index.html for all non-API routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

export default app;
