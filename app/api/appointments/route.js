import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      doctor_id,
      patient_id,
      is_cancel = false,
      fee,
      pay_type,
      appointment_date,
    } = data;

    if (!doctor_id || !patient_id || !fee || !appointment_date) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for existing appointment for same doctor, patient, date, and time
    const existingAppointment = await prisma.Appointments.findFirst({
      where: {
        doctor_id: Number(doctor_id),
        patient_id: Number(patient_id),
        appointment_date: new Date(appointment_date),
        is_cancel: false,
      },
    });

    if (existingAppointment) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You already have an appointment with this doctor at this date and time.",
        },
        { status: 409 }
      );
    }

    // Create the appointment
    const appointment = await prisma.Appointments.create({
      data: {
        doctor_id: Number(doctor_id),
        patient_id: Number(patient_id),
        is_cancel,
        fee,
        pay_type,
        appointment_date: new Date(appointment_date),
        createdAt: new Date(),
        canceled_at: is_cancel ? new Date() : null,
      },
    });

    return NextResponse.json({ success: true, appointment });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
