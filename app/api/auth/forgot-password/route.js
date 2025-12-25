import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sendResetPasswordEmail } from "@/lib/emails/sendResetPasswordEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email field is required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      {
        role: existingUser.role,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Password reset URL
    const resetPasswordUrl = `${process.env.BASE_URL}/reset-password?token=${token}`;

  await sendResetPasswordEmail({
    email: existingUser.email,
    first_name: existingUser.first_name,
    last_name: existingUser.last_name,
    role: existingUser.role,
    resetPasswordUrl,
  });

    return NextResponse.json({
      success: true,
      message: "Password reset link has been sent",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
