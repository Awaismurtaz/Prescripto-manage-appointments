import DoctorCard from '@/components/doctor-card';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const HomePage = () => {

  const doctors = [
    {
      id: 1,
      name: "Dr. Richard James",
      specialty: "General Physician",
      img: "/img/image 388.png",
      status: "Available",
    },
    {
      id: 2,
      name: "Dr. Sarah Lee",
      specialty: "Gynecologist",
      img: "/img/file (2) 1.png",
      status: "Available",
    },
    {
      id: 3,
      name: "Dr. John Doe",
      specialty: "Dermatologist",
      img: "/img/file (2) 3.png",
      status: "Available",
    },
    {
      id: 4,
      name: "Dr. Emily Smith",
      specialty: "Pediatrician",
      img: "/img/file (5) 3.png",
      status: "Available",
    },
    {
      id: 5,
      name: "Dr. Alex Brown",
      specialty: "Neurologist",
      img: "/img/file (4) 4.png",
      status: "Available",
    },
    {
      id: 6,
      name: "Dr. Maria Anwar",
      specialty: "Gastroenterologist",
      img: "/img/file (2) 3.png",
      status: "Available",
    },
    {
      id: 7,
      name: "Dr. Richard James",
      specialty: "General Physician",
      img: "/img/file (3) 1.png",
      status: "Available",
    },
    {
      id: 8,
      name: "Dr. Sarah Lee",
      specialty: "Gynecologist",
      img: "/img/file (4) 2.png",
      status: "Available",
    },
    {
      id: 9,
      name: "Dr. Richard James",
      specialty: "Dermatologist",
      img: "/img/file (3) 3.png",
      status: "Available",
    },
    {
      id: 10,
      name: "Dr. Maria Anwar",
      specialty: "Gastroenterologist",
      img: "/img/file (5) 2.png",
      status: "Available",
    }
  ];
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
            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
              {doctors.map((doc) => (
                <div key={doc.id} className="col">
                  <Link href={`/doctors/${doc.id}`} className='text-decoration-none'>
                    <DoctorCard doctorDetail={doc} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a href="All Doctor.html" className="btn doctor-btn">
              more
            </a>
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
