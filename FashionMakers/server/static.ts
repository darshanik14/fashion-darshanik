import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupStaticServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  // Serve static files from the public directory
  app.use(express.static(path.join(__dirname, '../dist/public')));

  // For any request that doesn't match a static file, serve index.html
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../dist/public', 'index.html'));
  });

  // Start the server
  const server = app.listen(PORT, () => {
    console.log(`Static server running on port ${PORT}`);
  });

  return { app, server };
}

// If this file is run directly, start the server
if (import.meta.url === `file://${process.argv[1]}`) {
  setupStaticServer();
}