import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { success: false, message: "Missing token or password" },
        { status: 400 }
      );
    }

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { email: payload.email },
      data: { password: hashedPassword },
    });

    return NextResponse.json(
      { success: true, message: "Password reset successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
