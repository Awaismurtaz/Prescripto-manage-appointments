"use client";

import axios from "axios";
import DoctorCard from "@/components/doctor-card";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Doctors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [
    "All Doctors",
    "General physician",
    "Gynologist", 
    "Dermatologist",
    "Gastroenterologist",
    "Neurologist",
    "Pediatricians",
  ];
  // <-- Define your categories statically here

  const [doctors, setDoctors] = useState([]);
console.log(doctors,"doctors")
  // Read category from query string (default "All Doctors")
  const selectedCategory = searchParams.get("category") || "All Doctors";

  // Fetch doctors from API based on category
  const fetchDoctors = async (category) => {
    try {
      let apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`;
      if (category && category !== "All Doctors") {
       apiUrl += `?specialty=${encodeURIComponent(category)}`;
      }
      const response = await axios.get(apiUrl);
      setDoctors(response?.data?.data || []);
    } catch (error) {
      console.error(error);
      setDoctors([]);
    }
  };

  useEffect(() => {
    fetchDoctors(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    const query = new URLSearchParams(window.location.search);
    if (category === "All Doctors") {
      query.delete("category");
    } else {
      query.set("category", category);
    }

    router.replace(`${window.location.pathname}?${query.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="row g-4">
      {/* Left Side - Pills */}
      <div className="col-md-3 col-lg-3 ">
        <div
          className="nav flex-column nav-pills me-3 custom_pill_tabs pt-4"
          role="tablist"
          aria-orientation="vertical"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`nav-link ${cat === selectedCategory ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={cat === selectedCategory}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="col-md-9 col-lg-9">
        <p className="pills-p">Browse through the doctors specialist.</p>

        <div className="tab-content">
          <div className="tab-pane show active" role="tabpanel">
            <div className="row g-4 all-doctor-row">
              {doctors.length > 0 ? (
                doctors.map((doc) => (
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
                <div className="d-flex align-items-center justify-content-center " style={{minHeight:"400px"}}>
                  <p className="text-black ">
                    No doctors found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
