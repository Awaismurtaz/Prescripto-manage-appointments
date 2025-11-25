import React from 'react'

const AboutUs = () => {
  return (
    <section style={{ marginBottom: 400 }}>
      <div className="about-hero">
        <div className="about-head">
          <img src="img/Group 4089.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-7">
            <div className="about-img">
              <img src="img/about_image.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 col-md-5 ps-5 pt-5 pt-md-0 pt-lg-5">
            <p className="about-text">
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently
              <br /> and efficiently. At Prescripto, we understand the
              challenges
              <br />
              individuals face when it comes to scheduling doctor appointments
              <br /> and managing their health records
            </p>
            <p className="about-text-2">
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver <br />
              superior service. Whether you're booking your first appointment
              <br />
              or managing ongoing care, Prescripto is here
              <br /> to support you every step of the way.
            </p>
            <p className="our">Our Vision</p>
            <p className="about-text-3">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
        <div className="why">
          Why <span className="text-dark">Choise Us</span>
        </div>
        <div className="blue-back border overflow-hidden">
          <div className="row">
            <div className="col-md-4 blue">
              <div className="inner-blue">
                <p className="inner-head">Efficiency:</p>
                <p className="inner-mid">
                  {" "}
                  Streamlined appointment scheduling
                  <br /> that fits into your busy lifestyle.
                </p>
              </div>
            </div>
            <div className="col-md-4 border-start blue">
              <div className="inner-blue">
                <p className="inner-head">Convenience:</p>
                <p className="inner-mid">
                  Access to a network of trusted
                  <br /> healthcare professionals in your area.
                </p>
              </div>
            </div>
            <div className="col-md-4 border-start blue">
              <div className="inner-blue">
                <p className="inner-head">Personalization:</p>
                <p className="inner-mid">
                  Tailored recommendations and reminders to help you stay on top
                  of your health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
