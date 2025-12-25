import { sendEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { sendDoctorWelcomeEmail } from "@/lib/emails/sendDoctorWelcomeEmail";
import bcrypt from "bcryptjs";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const headers = req.headers;
    const role = headers.get("role");
    
    const formData = await req.formData();
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const address = formData.get("address");
    const phone = formData.get("phone");
    const profile_image = formData.get("profile_image");
    const experience = formData.get("experience");
    const bio = formData.get("bio");
    const fee = formData.get("fee");
    const speciality = formData.get("speciality");
    const education = formData.get("education");

    if (!first_name || !last_name || !email || !address || !fee) {
      return NextResponse.json(
        { success: false, message: "Required fields missing." },
        { status: 403 }
      );
    }

    if (role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Only admin can add doctors" },
        { status: 403 }
      );
    }

    // Check if user already exists

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already used" },
        { status: 401 }
      );
    }

    // Image upload
    let filename = null;

    if (profile_image && profile_image.name) {
      const bytes = await profile_image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "/public/uploads");

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const uniqueName = `${Date.now()}-${profile_image.name}`;
      const filePath = path.join(uploadDir, uniqueName);
      await fs.promises.writeFile(filePath, buffer);

      filename = uniqueName;
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create user entry
    const user = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        password:"Abcd0011@",
        address,
        role: "doctor",
        profile_image: filename,
      },
    });

    // Create doctor profile linked to user
    await prisma.doctor.create({
      data: {
        degree: education,
        specialty: speciality,
        experience,
        fee,
        bio,
        userId: user.id,
      },
    });

    // Generate JWT
    const token = jwt.sign(
      {
        role: role,
        email: email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Password reset URL
    const resetPasswordUrl = `${process.env.BASE_URL}/reset-password?token=${token}`;
    // --- SEND EMAIL TO DOCTOR ---
    await sendDoctorWelcomeEmail({
      email,
      first_name,
      last_name,
      resetPasswordUrl,
    });

    return NextResponse.json(
      { success: true, message: "Doctor added successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding doctor:", error);
    return NextResponse.json(
      { success: false, message: "Error adding doctor" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const specialty = searchParams.get("specialty")?.trim();

    const whereClause = {};

    if (specialty) {
      whereClause.specialty = {
        contains: specialty,
      };
    }

    // Add filter on related user role
    whereClause.user = {
      role: "doctor",
    };

    const getDoctorsRaw = await prisma.doctor.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            first_name: true,
            last_name: true,
            profile_image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const getDoctors = getDoctorsRaw.map((doctor) => {
      const { password, user, ...doctorWithoutPassword } = doctor;
      return {
        ...doctorWithoutPassword,
        ...user,
        user: undefined,
      };
    });

    return NextResponse.json(
      { success: true, data: getDoctors },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}


