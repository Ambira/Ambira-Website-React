// api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, honeypot } = req.body || {};

    // simple spam trap: if honeypot filled, reject
    if (honeypot) {
      return res.status(200).json({ success: true }); // quietly accept bot
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    // read SMTP creds from env
    const SMTP_USER = process.env.SMTP_USER; // e.g., your Gmail address
    const SMTP_PASS = process.env.SMTP_PASS; // app password
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const SMTP_SECURE = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP credentials");
      return res.status(500).json({ success: false, error: "Server misconfiguration" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,     // sender
      to: "ambirapradhan1@gmail.com",             // recipient (your email)
      subject: `Website contact from ${name} <${email}>`,
      text: `
You have a new message from your website contact form.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
