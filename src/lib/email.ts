import nodemailer from 'nodemailer';

// IMPORTANT: In a real application, these credentials should be stored securely
// in environment variables (.env.local) and not hardcoded.
// e.g., user: process.env.GMAIL_USER
// You will also need to configure your Gmail account to allow less secure apps
// or use an "App Password".
export const GMAIL_CONFIG = {
    user: process.env.GMAIL_USER || 'dflowautomation@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'zixh cldo ilfs kkpg',
};

type MailOptions = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
};

export async function sendMail(options: MailOptions) {
    if (GMAIL_CONFIG.user === 'your-email@gmail.com' || GMAIL_CONFIG.pass === 'your-app-password') {
        console.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.warn("!!! Email not sent. Please configure your email credentials !!!");
        console.warn("!!! in src/lib/email.ts or set environment variables.      !!!");
        console.warn("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        // To avoid errors in the UI, we'll just log a warning and return.
        return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_CONFIG.user,
        pass: GMAIL_CONFIG.pass,
      },
    });

    try {
        const info = await transporter.sendMail(options);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email:", error);
        // Re-throwing the error so the calling function can handle it.
        throw new Error('Failed to send email.');
    }
}
