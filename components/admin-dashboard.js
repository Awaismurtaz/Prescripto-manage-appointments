import React from 'react'

const AdminDashboard = () => {
  return (
    <>
      <div className="top-dash d-flex">
        <div className="top-in d-flex ms-md-3 ms-lg-0">
          <div className="top-icon">
            <img src="img/Group 4134 (1).png" alt />
          </div>
          <div className="dash-text d-flex flex-column">
            <p>14</p>
            <p>Doctors</p>
          </div>
        </div>
        <div className="top-in d-flex  ms-md-3">
          <div className="top-icon">
            <img src="img/appointments_icon.svg" alt />
          </div>
          <div className="dash-text d-flex flex-column">
            <p>7</p>
            <p>Appointments</p>
          </div>
        </div>
        <div className="top-in d-flex ms-md-3">
          <div className="top-icon">
            <img src="img/Group 4296.png" alt />
          </div>
          <div className="dash-text d-flex flex-column">
            <p>5</p>
            <p>patients</p>
          </div>
        </div>
      </div>
      <div className="dash-main border">
        <div className="dash-first d-flex py-2 ps-3 border-bottom borde">
          <img src="img/list_icon.svg" alt />
          <p className="dash-p">Latest Appointment</p>
        </div>
        <div className="dash-main-in py-3 px-3 d-flex justify-content-between">
          <div className="mian-text d-flex align-items-center">
            <img src="img/profile_img.svg" alt />
            <div className="main-text-in">
              <p className="main-doctor">Dr. Richard James</p>
              <p className="main-time">Booking on 24th July, 2024</p>
            </div>
          </div>
          <img src="img/cancel_icon.svg" alt />
        </div>
        <div className="dash-main-in py-3 px-3 d-flex justify-content-between">
          <div className="mian-text d-flex align-items-center">
            <img src="img/profile_img.svg" alt />
            <div className="main-text-in">
              <p className="main-doctor">Dr. Richard James</p>
              <p className="main-time">Booking on 24th July, 2024</p>
            </div>
          </div>
          <img src="img/cancel_icon.svg" alt />
        </div>
        <div className="dash-main-in py-3 px-3 d-flex justify-content-between">
          <div className="mian-text d-flex align-items-center">
            <img src="img/profile_img.svg" alt />
            <div className="main-text-in">
              <p className="main-doctor">Dr. Richard James</p>
              <p className="main-time">Booking on 24th July, 2024</p>
            </div>
          </div>
          <img src="img/cancel_icon.svg" alt />
        </div>
        <div className="dash-main-in py-3 px-3 d-flex justify-content-between">
          <div className="mian-text d-flex align-items-center">
            <img src="img/profile_img.svg" alt />
            <div className="main-text-in">
              <p className="main-doctor">Dr. Richard James</p>
              <p className="main-time">Booking on 24th July, 2024</p>
            </div>
          </div>
          <img src="img/cancel_icon.svg" alt />
        </div>
        <div className="dash-main-in py-3 px-3 d-flex justify-content-between">
          <div className="mian-text d-flex align-items-center">
            <img src="img/profile_img.svg" alt />
            <div className="main-text-in">
              <p className="main-doctor">Dr. Richard James</p>
              <p className="main-time">Booking on 24th July, 2024</p>
            </div>
          </div>
          <img src="img/cancel_icon.svg" alt />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard
