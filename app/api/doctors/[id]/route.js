import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const { id } = params;

    const existingUserRaw = await prisma.doctor.findUnique({
      where: { id: Number(id) },
      include: {
        user: {
          select:{
          first_name:true,
          last_name:true,
          profile_image:true,
          }
        },
      },
    });

    if (!existingUserRaw) {
      return NextResponse.json(
        { success: false, message: "Doctor does not exist" },
        { status: 404 }
      );
    }

    // Doctor specialty
    const specialty = existingUserRaw?.specialty;

    const relatedDoctorsRaw = await prisma.doctor.findMany({
      where: {
        specialty: specialty,
      },
      include: {
        user: {
          select:{
            first_name:true,
            last_name:true,
            profile_image:true,
          }
        },
      },
    });


    // merge user fields in doctor 
    const relatedDoctors = relatedDoctorsRaw.map(doc=>({
      ...doc,
      ...doc.user,
      user:undefined
    }))

    const existingDoctorDetail = {
      ...existingUserRaw,
      ...existingUserRaw.user,
      user: undefined,
    };
    return NextResponse.json(
      {
        success: true,
        doctor: existingDoctorDetail,
        relatedDoctors,
      },
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
