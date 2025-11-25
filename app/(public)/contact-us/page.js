import React from 'react'

const Contactus = () => {
  return (
    <section>
      <div className="about-hero py-5">
        <div className="row g-4 pt-5">
          <div className="col-md-6">
            <div className="contact-img">
              <img src="img/contact_image.png" className="img-fluid " />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-text">
              <p className="contact-top">our office</p>
              <p>
                54709 Willms Station
                <br />
                Suite 350, Washington, USA
              </p>
              <p>
                Tel: (000) 000-0000
                <br />
                Email: greatstackdev@gmail.com
              </p>
              <p className="contact-top">Careers at PRESCRIPTO</p>
              <p>Learn more about our teams and job openings.</p>
              <a
                className="btn btn-outline-dark rounded-0 px-5 py-3 mt-1 "
                href="#"
              >
                Explore Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus
