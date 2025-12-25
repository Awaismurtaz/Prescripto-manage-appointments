import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true if port is 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"Prescripto Admin" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error };
  }
};
