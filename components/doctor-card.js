import Image from "next/image";
import React from "react";
import DoctorAvatar from "@/public/img/doctor_avatar.png";

const DoctorCard = (props) => {
  const { doctorDetail } = props;
  return (
    <div className="card doctor_card p-2">
      <Image
        width={300}
        height={400}
        src={
          doctorDetail?.profile_image
            ? `/uploads/${doctorDetail.profile_image}`
            : DoctorAvatar.src
        }
        alt={`${doctorDetail?.first_name || ""} ${
          doctorDetail?.last_name || ""
        }`.trim()}
        className="card-img-top img-fluid"
      />
      <div className="card-body doctor_card_body">
        <p className="icon-text">
          <span className="fs-3 d-inline-block active_dot">.</span>
          <span>Available</span>
        </p>
        <p className="doctor-name">
          {doctorDetail?.first_name} {doctorDetail?.last_name}
        </p>
        <p className="doctor-type">
          {doctorDetail?.specialty || "None"}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
