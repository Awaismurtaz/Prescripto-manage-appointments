import { sendEmail } from "@/lib/mail";

export async function sendDoctorWelcomeEmail({
  email,
  first_name,
  last_name,
  resetPasswordUrl,
}) {
  try {
    await sendEmail({
      to: email,
      subject: "Doctor Account Created - Reset Your Password",
      html: `
      <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">

          <!-- Header -->
          <div style="background:#007BFF; padding:20px; text-align:center;">
            <h1 style="color:#ffffff; margin:0;">Prescripto</h1>
            <p style="color:#e8e8e8; margin-top:5px;">Doctor Account Created</p>
          </div>

          <!-- Body -->
          <div style="padding:25px; color:#333333;">
            <h2>Hello Dr. ${first_name} ${last_name},</h2>
            <p>
              Your doctor account has been successfully created on 
              <strong>Prescripto</strong>.
            </p>

            <h3>Your Login Email:</h3>
            <p style="font-size:16px;"><strong>${email}</strong></p>

            <p>
              For security reasons, you must set a password before logging in.  
              Please click the button below to create your password.
            </p>

            <!-- Reset Password Button -->
            <div style="text-align:center; margin:30px 0;">
              <a href="${resetPasswordUrl}" 
                style="background:#007BFF; color:white; padding:12px 25px; 
                text-decoration:none; border-radius:6px; font-size:16px;">
                Reset Password
              </a>
            </div>

            <p>If the button doesn't work, copy & paste this link:</p>
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
    console.error("Error sending doctor email:", error);
    return false;
  }
}
