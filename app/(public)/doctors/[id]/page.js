"use client";
import DoctorCard from "@/components/doctor-card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DoctorAvatar from "@/public/img/doctor_avatar.png";
import DoctorCardSkeleton from "@/components/DoctorCardSkeleton";
import { useSession } from "next-auth/react";
import { dateTimeFormate } from "@/lib/dateTimeFormate";

const Doctordetail = () => {
  const { id } = useParams();
  const [doctorDetail, setDoctorDetail] = useState();
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const userId = session?.data?.user?.id;

  console.log(doctorDetail?.id,"doctor id");
  console.log(userId,"userid");

  const doctorView = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors/${id}`
      );
      setDoctorDetail(response?.data?.doctor);
      setRelatedDoctors(response?.data?.relatedDoctors);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    doctorView();
  }, []);

  // const doctorDetail = doctors.find((doctor) => doctor.id === Number(id));

  const timeSlotsUpate = [
    {
      day: "Mon",
      slots: [
        "8.00 am",
        "8.30 am",
        "9.00 am",
        "9.30 am",
        "1.00 pm",
        "2.30 pm",
        "4.30 pm",
      ],
    },
    {
      day: "Tue",
      slots: [
        "9.00 am",
        "10.00 am",
        "11.30 am",
        "1.00 pm",
        "1.30 pm",
        "2.40 pm",
      ],
    },
    {
      day: "Wed",
      slots: ["8.30 am", "9.30 am", "10.30 am", "11.30 am"],
    },
    {
      day: "Thu",
      slots: ["8.00 am", "9.00 am", "9.30 am", "8.30 am", "7.30 am"],
    },
    {
      day: "Fri",
      slots: ["8.00 am", "8.30 am", "9.30 am", "10.00 am"],
    },
    {
      day: "Sat",
      slots: ["9.00 am", "10.30 am", "12.00 pm"],
    },
    {
      day: "Sun",
      slots: ["10.00 am", "11.00 am", "12.30 pm"],
    },
  ];

  const getDayTimeSlots = timeSlotsUpate.find((d) => d.day === selectedDay);

  const handleBook = async () => {
    try {
      console.log("Selected Day:", selectedDay);
      console.log("Selected Time:", selectedTime);

      if (!selectedTime) {
        toast.error("Please select a time first!");
        return;
      }
      const appointment_date = dateTimeFormate(selectedDay, selectedTime);
      console.log(appointment_date, "appointment_date");
      const payload = {
        patient_id: userId,
        doctor_id: doctorDetail?.id,
        fee: doctorDetail?.fee,
        appointment_date,
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/appointments`,
        payload
      );
      console.log(response, "book apponintment");
    } catch (error) {}
  };

  return (
    <div className="pt-5">
      <section>
        <div className="row g-4">
          {!doctorDetail}
          <div className="second-file d-flex mt-4">
            <div className="col-md-3 col-sm-12">
              <div className="second-file-img">
                <div className="position-relative w-100">
                  <Image
                    src={
                      doctorDetail?.profile_image
                        ? `/uploads/${doctorDetail.profile_image}`
                        : DoctorAvatar.src
                    }
                    alt={`${doctorDetail?.first_name || ""} ${
                      doctorDetail?.last_name || ""
                    }`.trim()}
                    fill
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-2">
              <div className="doctor-text">
                <div className="second-file-text">
                  <div className="second-file-doctor d-flex">
                    <h1 className="sec-doctor-name">
                      <span className="me-1">{doctorDetail?.first_name}</span>
                      <span>{doctorDetail?.last_name}</span>
                    </h1>
                    <Image
                      src="/img/Vector.png"
                      className="object-fit-contain ms-2"
                      width={34}
                      height={34}
                      alt="check icon"
                    />
                  </div>
                </div>
                <div className="doctor-rank d-flex">
                  <p className="doctor-rank-in">{doctorDetail?.specialty}</p>
                  <a href="#" className="btn btn-outline-dark rank">
                    {doctorDetail?.doctor?.experience} Year
                  </a>
                </div>
                <p className="text-dark fw-bold">
                  About <i className="bi bi-info-circle" />
                </p>
                <p>{doctorDetail?.doctor?.bio}</p>
                <p>
                  Appointment fee:
                  <span className="text-dark">${doctorDetail?.fee}</span>
                </p>
              </div>
              <div className="times">
                <h4 className="mb-4 fw-bold">Booking Slot</h4>

                {/* Day Tabs */}
                <ul className="nav time-btn mb-4">
                  {timeSlotsUpate.map((data, index) => (
                    <li className="nav-item" key={index}>
                      <button
                        className={`nav-link ${
                          selectedDay === data?.day ? "active" : ""
                        }`}
                        onClick={() => {
                          setSelectedDay(data?.day);
                          setSelectedTime("");
                        }}
                      >
                        {data?.day}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Times for Selected Day */}
                <div className="tab-content">
                  <div className="d-flex">
                    {getDayTimeSlots &&
                      getDayTimeSlots?.slots.map((time) => (
                        <button
                          key={time}
                          className={`btn btn-outline-dark m-1 ${
                            selectedTime === time ? "active text-white" : ""
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Book Button */}
                <button className="btn day-book mt-3" onClick={handleBook}>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="pb-5">
          <h2 className="find-1">Related Doctor</h2>
          <h6 className="find-2">
            Simply browse through our extensive list of trusted doctors.
          </h6>
        </div>
        <div className="row g-4 all-doctor-row">
          {loading
            ? [...Array(4)].map((_, idx) => (
                <div key={idx} className="col col-12 col-md-6 col-lg-3">
                  <DoctorCardSkeleton />
                </div>
              ))
            : relatedDoctors.map((doc) => (
                <div key={doc.id} className="col col-12 col-md-6 col-lg-3">
                  <Link
                    href={`/doctors/${doc.id}`}
                    className="text-decoration-none"
                  >
                    <DoctorCard doctorDetail={doc} />
                  </Link>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Doctordetail;
