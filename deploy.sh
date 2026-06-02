#!/bin/bash
set -e

echo "Pulling latest changes..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Restarting PM2..."
pm2 restart SAWA

echo "Done."
