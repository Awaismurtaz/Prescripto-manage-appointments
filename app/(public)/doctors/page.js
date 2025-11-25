"use client";

import axios from "axios"; // Missing import in your snippet
import DoctorCard from "@/components/doctor-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Doctors = () => {
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

  // Collect unique specialties from nested doctor object
  const categories = [
    "All Doctors",
    ...Array.from(
      new Set(
        doctors.map((d) => d?.doctor?.specialty).filter((spec) => spec) // filter out undefined/null
      )
    ),
  ];

  return (
    <div className="row">
      <p className="pills-p">Browse through the doctors specialist.</p>

      {/* Left Side - Pills */}
      <div className="col-md-2 col-lg-3 mb-4">
        <div
          className="nav flex-column nav-pills me-3 custom_pill_tabs"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {categories.map((cat, idx) => {
            const id = `tab-${idx}`;
            return (
              <button
                key={cat}
                className={`nav-link ${idx === 0 ? "active" : ""}`}
                data-bs-toggle="pill"
                data-bs-target={`#${id}`}
                type="button"
                role="tab"
                aria-controls={id}
                aria-selected={idx === 0}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="col-md-10 col-lg-9">
        <div className="tab-content" id="v-pills-tabContent">
          {categories.map((cat, idx) => {
            const id = `tab-${idx}`;
            // Fix filter to check nested specialty inside doctor object
            const list =
              cat === "All Doctors"
                ? doctors
                : doctors.filter((d) => d?.doctor?.specialty === cat);
            return (
              <div
                key={id}
                className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
                id={id}
                role="tabpanel"
                aria-labelledby={`tab-${idx}`}
                tabIndex={0}
              >
                <div className="row g-4 all-doctor-row">
                  {list.length > 0 ? (
                    list.map((doc) => (
                      <div key={doc.id} className="col-12 col-md-6 col-lg-4">
                        <Link
                          href={`/doctors/${doc.id}`}
                          className="text-decoration-none"
                        >
                          <DoctorCard doctorDetail={doc} />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No doctors found in this category.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
