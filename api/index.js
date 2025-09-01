import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Basic Auth middleware
const basicAuth = (req, res, next) => {
  const auth = req.headers.authorization;
  const user = process.env.BASIC_AUTH_USER || 'admin';
  const pass = process.env.BASIC_AUTH_PASS || 'Petugem-14';

  if (!auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).send('Auth required');
  }

  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic") {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).send('Auth required');
  }

  const [u, p] = Buffer.from(encoded, 'base64').toString().split(":");
  if (u !== user || p !== pass) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).send('Auth required');
  }

  next();
};

// Apply Basic Auth to all routes
app.use(basicAuth);

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

export default app;
