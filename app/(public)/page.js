"use client"
import DoctorCard from '@/components/doctor-card';
import DoctorCardSkeleton from '@/components/DoctorCardSkeleton';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
  const [doctors, setDoctors]=useState([]);
  const [limit, setLimit]=useState(10);
  const [loading, setLoading]=useState(true)

  const getDoctors=async()=>{
    try {
      let response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/doctors`);
      setDoctors(response?.data?.data || []);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setDoctors([]);
      setLoading(false)
    }
  }
  const updateLimit=()=>{
    if(window.innerWidth >= 1400){
      setLimit(10)
    }else{
      setLimit(8)
    }
  }

  useEffect(()=>{
    getDoctors();

    window.addEventListener("resize", updateLimit)

    return ()=> window.removeEventListener("resize", updateLimit)
  },[])

  return (
    <div>
      <div className="first-doctor">
        <div className="container">
          <div className="row mt-3" style={{ paddingTop: 100 }}>
            <div
              className="col-md-12 col-lg-6 col-sm-6 top-text"
              style={{ paddingLeft: 66 }}
            >
              <p className="header-text">
                Book Appointment <br className="d-none d-md-block" /> With
                Trusted Doctors
              </p>
              <div className="d-flex cir-top">
                <div className="cir-img">
                  <Image
                    width={40}
                    height={40}
                    src="/img/Mask group.png"
                    className="m-0"
                    alt="..."
                  />
                  <Image
                    width={40}
                    height={40}
                    src="/img/Ellipse 582.png"
                    alt="patient"
                  />
                  <Image
                    width={40}
                    height={40}
                    src="/img/Ellipse 581.png"
                    alt="patient"
                  />
                </div>
                <p className="sub-header">
                  Simply browse through our extensive list of trusted doctors,
                  schedule your appointment hassle-free.
                </p>
              </div>
              <div className="head-btn">
                <a href="#">
                  Book appointment{" "}
                  <i className="fa-solid fa-arrow-right fa-xs ms-2" />
                </a>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12">
              <div className="header-img">
                <Image
                  width={500}
                  height={500}
                  src="/img/doc-header-img.png"
                  className="img-fluid"
                  alt="doctor image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="find">
        <div className="speacial">
          <p className="find-1">Find by Speciality </p>
          <p className="find-2">
            Simply browse through our extensive list of trusted doctors,
            schedule
            <br /> your appointment hassle-free.
          </p>
          <div className="img-text d-flex justify-content-around">
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img ">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Group 4134.png"
                    alt=""
                  />
                </div>
                <p>General physician</p>
              </a>
            </div>
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Group 4128.png"
                    alt=""
                  />
                </div>
                <p>Gynecologist</p>
              </a>
            </div>
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Group 4131.png"
                    alt=""
                  />
                </div>
                <p>Dermatologist</p>
              </a>
            </div>
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Group 4133.png"
                    alt=""
                  />
                </div>
                <p>Pediatricians</p>
              </a>
            </div>
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Group.png"
                    alt="disease imae"
                  />
                </div>
                <p>Neurologist</p>
              </a>
            </div>
            <div className="diseace">
              <a className="diseace-item" href="#">
                <div className="disease-img">
                  <Image
                    width={48}
                    height={48}
                    src="/img/Gastroenterologist-CTgzRFeY.svg"
                    alt=""
                  />
                </div>
                <p>Gastroenterologist</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="doctor text-center">
          <p className="find-1">Top Doctor to Book </p>
          <p className="find-2">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="doctor-card">
            {loading ? (
              // Show Loader inside a single row
              <div className="row g-4 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                {[...Array(limit)].map((_, idx) => (
                  <div key={idx} className="col">
                    <DoctorCardSkeleton />
                  </div>
                ))}
              </div>
            ) : doctors.length > 0 ? (
              // Show Doctors Grid inside a single row
              <div className="row g-4 row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                {doctors.slice(0, limit).map((doc) => (
                  <div key={doc.id} className="col">
                    <Link
                      href={`/doctors/${doc.id}`}
                      className="text-decoration-none"
                    >
                      <DoctorCard doctorDetail={doc} />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              // Optional: No Results Message
              <p>No doctors found.</p>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <Link href="/doctors" className="btn doctor-btn">
              more
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="book">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p className="book-text">
                  BookAppointment <br className="d-none d-md-block" /> With 100+
                  Trusted Doctors
                </p>
                <a className="book-btn" href="Main account.html">
                  Create account
                </a>
              </div>
              <div className="col-md-5">
                <div className="book-img">
                  <Image
                    width={500}
                    height={500}
                    src="/img/appointment-doc-img.png"
                    className="img-fluid"
                    alt="appointment image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage
