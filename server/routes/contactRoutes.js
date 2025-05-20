import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      return res.status(500).json({
        message: 'Email configuration is missing in environment variables.'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Us Message from LearnX',
      text: `You have received a message from ${name} (${email}):\n\n${message}`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error sending message.',
      error: error.message,
    });
  }
});

export default router;
