import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
  });
  
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// For any request that doesn't match a static file, serve index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Static server is running on port ${port}`);
});