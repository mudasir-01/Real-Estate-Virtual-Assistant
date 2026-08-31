import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body || {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({ message: "Please complete the required fields." });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.NOTIFY_EMAIL) {
    console.log("CONTACT FORM (email is not configured):", { name, email, phone, service, message });
    return res.json({ message: "Inquiry received. Email notifications are not configured yet." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Real Estate VA Inquiry — ${service}`,
      text:
`New inquiry from your website

Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone || "Not provided"}
Service: ${service}

Message:
${message}
`
    });

    return res.json({ message: "Inquiry sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Could not send the inquiry." });
  }
});

// Serve the built React app in production.
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});