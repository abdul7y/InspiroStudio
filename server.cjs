/**
 * Inspiro Studio - Fullstack Deployment Ready Backend
 * Required packages: npm install express nodemailer cors body-parser dotenv
 */

require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Validate Environment Variables
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error("ERROR: Missing SMTP environment variables. Check your .env file.");
  process.exit(1);
}

// Nodemailer Transporter using ENV variables only
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 465,
  secure: process.env.SMTP_PORT == 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, category, brief, aiInsight } = req.body;

  if (!name || !email || !brief) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: `"Inspiro Web Lead" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject: `New Project Brief: ${name} (${category})`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #5b21b6; border-bottom: 2px solid #5b21b6; padding-bottom: 10px;">New Project Inquiry</h2>
        
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Client Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${category}</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Project Brief:</strong></p>
          <p style="font-style: italic;">"${brief}"</p>
        </div>

        <div style="background: #ede9fe; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 5px;">
          <p style="color: #6d28d9; font-weight: bold; margin-bottom: 5px;">Studio AI Analysis:</p>
          <p>${aiInsight}</p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This inquiry was dispatched from the Inspiro Studio Contact Form.
        </p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${email}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Serve Vite frontend
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Fullstack Inspiro Studio server running on port ${PORT}`);
});
