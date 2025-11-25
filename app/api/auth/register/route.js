import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      email,
      password,
      role
    } = body;


    if(!first_name || !last_name || !email || !password){
       return NextResponse.json({success:false, message:"All fields must be required"},{status:400})
    }
    // find existing user
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        password: hashedPassword,
        email,
        role,
      },
    });

    // remove password before sending response
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(
      {user: userWithoutPassword ,success: true ,message:"user registered successfully"},
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
