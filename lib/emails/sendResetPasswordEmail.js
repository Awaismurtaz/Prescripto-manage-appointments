import { sendEmail } from "../mail";

export async function sendResetPasswordEmail({
  email,
  first_name,
  last_name,
  resetPasswordUrl,
  role,
}) {
  try {
    await sendEmail({
      to: email,
      subject: "Reset Your Password",
      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <div style="background:#007BFF; padding:20px; text-align:center;">
            <h1 style="color:#ffffff; margin:0;">Prescripto</h1>
            <p style="color:#e8e8e8; margin-top:5px;">Password Reset Request</p>
          </div>

          <!-- Body -->
          <div style="padding:25px; color:#333333;">
            <h2>Hello ${first_name} ${last_name},</h2>
            <p>
              We received a request to reset the password for your ${role} account.
            </p>

            <p>
              To reset your password, please click the button below:
            </p>

            <!-- Reset Password Button -->
            <div style="text-align:center; margin:30px 0;">
              <a href="${resetPasswordUrl}" 
                style="background:#007BFF; color:white; padding:12px 25px; 
                text-decoration:none; border-radius:6px; font-size:16px;">
                Reset Password
              </a>
            </div>

            <p>If you did not request a password reset, please ignore this email.</p>

            <p>If the button above does not work, please copy and paste the following link into your browser:</p>
            <p style="word-break:break-all; color:#007BFF;">
              ${resetPasswordUrl}
            </p>

            <br/>
            <p>Regards,<br><strong>Prescripto Admin</strong></p>
          </div>

        </div>
      </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Error sending account email:", error);
    return false;
  }
}
