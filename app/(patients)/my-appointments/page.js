import React from "react";

const MyAppoinments = () => {
  // Dummy appointment data
  const appointments = [
    {
      id: 1,
      name: "Dr. Richard James",
      type: "General Physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/image 388.png",
      status: "Unpaid",
    },
    {
      id: 2,
      name: "Dr. Sarah Lee",
      type: "Gynecologist",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/file (2) 3.png",
      status: "Paid",
    },
    {
      id: 3,
      name: "Dr. Alex Brown",
      type: "Dermatologist",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/file (3) 1.png",
      status: "Unpaid",
    },
    {
      id: 4,
      name: "Dr. Maria Anwar",
      type: "Neurologist",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/file (4) 4.png",
      status: "Paid",
    },
    {
      id: 5,
      name: "Dr. John Doe",
      type: "Gastroenterologist",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/file (5) 3.png",
      status: "Pending",
    },
    {
      id: 6,
      name: "Dr. Mumtaz Begum",
      type: "General Physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      dateTime: "25 July, 2024 | 8:30 PM",
      image: "/img/file (4) 3.png",
      status: "Unpaid",
    },
  ];

  return (
    <div className="doctor-appointment container py-4">
      <p className="opointment fs-4 fw-bold mb-3">My Appointments</p>
      <hr className="border opacity-100" />

      {appointments.map((apo, index) => (
        <div key={index}>
          <div
            key={apo.id}
            className="appointment-detail d-flex justify-content-between align-items-start "
          >
            {/* Doctor Detail */}
            <div className="apo-doctor-detail d-flex">
              <div className="apo-img me-3">
                <img
                  src={apo.image}
                  alt={apo.name}
                  className="img-fluid rounded"
                />
              </div>

              <div className="apo-text">
                <p className="apo-name fw-bold mb-1">{apo.name}</p>
                <p className="apo-type text-muted mb-1">{apo.type}</p>
                <p className="apo-addres fw-semibold mb-1">Address:</p>
                <p className="adres-in mb-1">{apo.address}</p>
                <p className="apo-date">
                  <span className="date-inner fw-semibold">
                    Date &amp; Time:
                  </span>{" "}
                  {apo.dateTime}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="apo-detail-btn text-end">
              {apo.status === "Paid" && (
                <a href="#" className="btn paid px-4 py-2 mb-2 rounded-0">
                  Paid
                </a>
              )}
              {apo.status === "Pending" && (
                <a
                  href="#"
                  className="btn btn-secondary px-4 py-2 mb-2 w-100 rounded-0"
                >
                  Pending
                </a>
              )}
              <br />
              <a href="#" className="btn paid-in rounded-0 px-4 py-2">
                Cancel appointment
              </a>
            </div>
          </div>
          <hr className=" border opacity-50" />
        </div>
      ))}
    </div>
  );
};

export default MyAppoinments;
