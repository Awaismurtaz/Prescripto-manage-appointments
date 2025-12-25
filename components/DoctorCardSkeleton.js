import React from "react";

const DoctorCardSkeleton = () => {
  return (
    <div className="card doctor_card p-2 shimmer-card">
      <div className="shimmer-img shimmer"></div>

      <div className="card-body doctor_card_body">
        <div className="shimmer-line shimmer w-50 mb-2"></div>
        <div className="shimmer-line shimmer w-75 mb-2"></div>
        <div className="shimmer-line shimmer w-25"></div>
      </div>
    </div>
  );
};

export default DoctorCardSkeleton;
