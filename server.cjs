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

const SMTP_HOST = (process.env.SMTP_HOST || '').trim();
const SMTP_PORT = Number((process.env.SMTP_PORT || '465').trim());
const SMTP_USER = (process.env.SMTP_USER || '').trim();
const SMTP_PASS = (process.env.SMTP_PASS || '').trim();
const SMTP_SECURE =
  typeof process.env.SMTP_SECURE === 'string'
    ? process.env.SMTP_SECURE.trim().toLowerCase() === 'true'
    : SMTP_PORT === 465;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Validate Environment Variables
if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.error("ERROR: Missing SMTP environment variables. Check your .env file.");
  process.exit(1);
}

const isGmailHost = /gmail\.com$/i.test(SMTP_HOST);
if (isGmailHost && SMTP_PASS.length < 16) {
  console.warn(
    "WARNING: Gmail SMTP commonly requires a 16-character App Password (not your normal account password)."
  );
}

// Nodemailer Transporter using ENV variables only
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  },
  tls: {
    // Some hosts require STARTTLS on 587 while still validating certificates.
    rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false'
  }
});

const getSmtpErrorMessage = (error) => {
  const raw = String(error?.message || '');
  const code = String(error?.code || '');
  const isAuthError = code === 'EAUTH' || /535|authentication failed|invalid login/i.test(raw);
  if (isAuthError) {
    return "SMTP auth failed (535). Check SMTP_USER/SMTP_PASS. If using Gmail, use a 16-char App Password with 2FA enabled. For Outlook/Zoho/private mail, ensure SMTP AUTH is enabled for the mailbox.";
  }

  const isConnectionError = code === 'ESOCKET' || code === 'ECONNECTION' || /connect|timeout|ETIMEDOUT/i.test(raw);
  if (isConnectionError) {
    return "SMTP connection failed. Verify SMTP_HOST/SMTP_PORT and firewall/network access.";
  }

  return raw || 'Failed to send email.';
};

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, category, brief, aiInsight } = req.body;
  const normalizedCategory =
    typeof category === 'string' && category.trim() ? category.trim() : 'General Inquiry';
  const normalizedInsight =
    typeof aiInsight === 'string' && aiInsight.trim()
      ? aiInsight.trim()
      : 'The lead submitted a clear brief and is likely ready for a focused discovery call.';

  if (!name || !email || !brief) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Invalid email address format' });
  }

  const mailOptions = {
    from: `"Inspiro Web Lead" <${SMTP_USER}>`,
    to: SMTP_USER,
    replyTo: email,
    subject: `New Project Brief: ${name} (${normalizedCategory})`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #5b21b6; border-bottom: 2px solid #5b21b6; padding-bottom: 10px;">New Project Inquiry</h2>
        
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Client Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${normalizedCategory}</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Project Brief:</strong></p>
          <p style="font-style: italic;">"${brief}"</p>
        </div>

        <div style="background: #ede9fe; padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 5px;">
          <p style="color: #6d28d9; font-weight: bold; margin-bottom: 5px;">Studio AI Analysis:</p>
          <p>${normalizedInsight}</p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This inquiry was dispatched from the Inspiro Studio Contact Form.
        </p>
      </div>
    `
  };

  try {
      // STEP 1 — Verify SMTP connection (ADD HERE)
    await transporter.verify();
    console.log("SMTP connection verified");

    // send email 
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${email}`);
    res.status(200).json({ message: 'Email sent successfully', aiInsight: normalizedInsight });

    // catch error
  } catch (error) {
    console.error('Nodemailer Error:', error);
    res.status(500).json({ error: 'Failed to send email', details: getSmtpErrorMessage(error) });
  }
});

// Serve Vite frontend
app.use(express.static(path.join(__dirname, 'dist')));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Fullstack Inspiro Studio server running on port ${PORT}`);
});
