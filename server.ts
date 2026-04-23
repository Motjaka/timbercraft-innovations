import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Email transporter configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'annakuudd@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  app.post('/api/order', async (req, res) => {
    const { product, quantity, name, email } = req.body;
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'annakuudd@gmail.com',
        subject: 'New Order Form Submission',
        text: `Product: ${product}\nQuantity: ${quantity}\nName: ${name}\nEmail: ${email}`,
      });
      res.status(200).json({ message: 'Order sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send order' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
