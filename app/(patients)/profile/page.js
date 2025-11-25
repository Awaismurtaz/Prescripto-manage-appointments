import React from 'react'

const profile = () => {
  return (
    <section>
      <div className="profile">
        <div className="patient-img d-flex mt-3">
          <div className="first-img">
            <img src="img/profile_pic.png" alt="" />
          </div>
          <div className="icon-img-profile">
            <img src="img/avatar_icon.png" alt="" />
          </div>
        </div>
        <div className="patient-text">
          <p className="patient-name">Edward Vincent</p>
          <hr className="border w-75 pat-line" />
          <div className="contact-information">
            <a className="contact-inner">CONTACT INFORMATION</a>
            <p className="mt-4">
              Email id: <span className="bill">richardjameswap@gmail.com</span>
            </p>
            <p>
              Phone: <span className="bill">+1 123 456 7890</span>
            </p>
            <p className="mb-4">
              Address:{" "}
              <span className="wrong ">
                57th Cross, Richmond
                <br />
                <span className="addre-span">
                  {" "}
                  Circle, Church Road, London
                </span>{" "}
              </span>
            </p>
          </div>
          <div className="basic-info">
            <a className="basic-inner">BASIC INFORMATION</a>
            <p className="mt-3">
              Gender: <span className="wrong">Male</span>
            </p>
            <p>
              Date: <span className="wrong-no">20 July, 2024</span>
            </p>
          </div>
        </div>
        <div className="profile-btn">
          <a href="#" className="profile-btn-1">
            Edit
          </a>
          <a href="#" className="profile-btn-2 ">
            Save information
          </a>
        </div>
      </div>
    </section>
  );
}

export default profile
