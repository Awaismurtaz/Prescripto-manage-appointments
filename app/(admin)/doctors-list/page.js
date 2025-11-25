"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorAvatar from "../../../public/img/doctor_avatar.png";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  const handleGetDoctor = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`
      );
      setDoctors(response?.data?.data || []); 
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetDoctor();
  }, []);

  return (
    <div className="inner_content py-5">
      <div className="container-fluid">
        <h3 className="text-black mb-4">Doctors list</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div className="col" key={index}>
                <div className="card doctor_card">
                  <img
                    src={
                      doctor?.profile_image
                        ? `/uploads/${doctor.profile_image}`
                        : DoctorAvatar.src
                    }
                    className="card-img-top"
                    alt={`${doctor?.first_name || ""} ${
                      doctor?.last_name || ""
                    }`.trim()}
                  />
                  <div className="card-body text-center doctor_card_body">
                    <p className="doctor-name fw-bold mb-1">
                      {doctor?.first_name} {doctor?.last_name}
                    </p>
                    <p className="doctor-type text-muted">
                      {doctor?.doctor?.specialty || "Specialty not available"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
