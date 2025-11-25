"use client"
import DoctorCard from '@/components/doctor-card';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react'


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
  },
  {
    id: 11,
    name: "Dr. Emily Smith",
    specialty: "Pediatrician",
    img: "/img/file (3) 1.png",
    status: "Available",
  },
  {
    id: 12,
    name: "Dr. Richard James",
    specialty: "Neurologist",
    img: "/img/file (4) 3.png",
    status: "Available",
  },
];


const Doctordetail = () => {
  const {id}=useParams();
  console.log(id,"postid")

    const doctorDetail = doctors.find((doctor) => doctor.id === Number(id)); 

    if (!doctorDetail) {
      return <p className="text-center mt-5">Doctor not found</p>;
    }
  console.log(doctorDetail, "doctorDetail");
  return (
    <div className="pt-5">
      <section>
        <div className="row g-4">
          <div className="second-file d-flex mt-4">
            <div className="col-md-3 col-sm-12">
              <div className="second-file-img">
                <div className="position-relative w-100">
                  <Image
                    src={doctorDetail.img}
                    alt="Doctor"
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
                    <h1 className="sec-doctor-name">{doctorDetail.name}</h1>
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
                  <p className="doctor-rank-in">{doctorDetail.specialty}</p>
                  <a href="#" className="btn btn-outline-dark rank">
                    4 Year
                  </a>
                </div>
                <p className="text-dark fw-bold">
                  About <i className="bi bi-info-circle" />
                </p>
                <p>
                  Dr. Davis has a strong commitment to delivering comprehensive
                  medical care, focusing on preventive medicine, early
                  diagnosis, and effective treatment strategies. Dr. Davis has a
                  strong commitment to delivering comprehensive medical care,
                  focusing on preventive medicine, early diagnosis, and
                  effective treatment strategies.
                </p>
                <p>
                  Appointment fee: <span className="text-dark">$50</span>{" "}
                </p>
              </div>
              <div className="times">
                <h4 className="mb-4 fw-bold">Booking Slot</h4>
                <ul className="nav time-btn  mb-4" id="dayTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="mon-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mon"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Mon
                      <br />
                      10
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tue-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tue"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Tue
                      <br />
                      11
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="wed-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#wed"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Wed
                      <br />
                      12
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="thu-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#thu"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Thu
                      <br />
                      13
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="fri-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#fri"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Fri
                      <br />
                      14
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="sat-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sat"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Sat
                      <br />
                      15
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="sun-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sun"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Sun
                      <br />
                      16
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="dayTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="mon"
                    role="tabpanel"
                    aria-labelledby="mon-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      8.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      8.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      1.00 pm
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      2.30pm
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      4.30 pm
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tue"
                    role="tabpanel"
                    aria-labelledby="tue-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      9.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      10.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      11.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      1.00 pm
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      1.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      2.40 pm
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      11.30 am
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="wed"
                    role="tabpanel"
                    aria-labelledby="wed-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      8.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      10.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      11.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      10.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      11.30 am
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="thu"
                    role="tabpanel"
                    aria-labelledby="thu-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      8.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      8.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      7.30 am
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="fri"
                    role="tabpanel"
                    aria-labelledby="fri-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      8.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      8.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      9.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      10.00 am
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="sat"
                    role="tabpanel"
                    aria-labelledby="sat-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      9.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      10.30 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      12.00 pm
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="sun"
                    role="tabpanel"
                    aria-labelledby="sun-tab"
                  >
                    <a href="#" className="btn btn-outline-dark">
                      10.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      11.00 am
                    </a>
                    <a href="#" className="btn btn-outline-dark">
                      12.30 pm
                    </a>
                  </div>
                </div>
                <a href="#" className="btn day-book">
                  Book an appointment
                </a>
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
          {doctors.map((doc) => (
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
}

export default Doctordetail
