import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <footer className="footer">
          <div className="row" style={{ paddingBottom: 50 }}>
            <div className="col-md-6 col-lg-8">
              <div className="footer-text">
                <div className="first-logo-2">
                  <Image
                    width={45}
                    height={45}
                    src="/img/Group 4123.png"
                    alt=""
                  />
                  <span className="logo-text">Prescripto</span>
                </div>
                <p className="footer-p">
                  Lorem Ipsum&nbsp;is simply dummy text of the printing and
                  typesetting industry. Lorem
                  <br className="d-none d-sm-block" /> Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when
                  <br className="d-none d-sm-block" /> an unknown printer took a
                  galley of type and scrambled it to make a type
                  <br className="d-none d-sm-block" /> specimen book.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <p>COMPANY</p>
              <ul className="list-unstyled" />
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
              <a href="">
                {" "}
                <li>Private Policy</li>
              </a>
            </div>
            <div className="col-lg-2 col-md-3">
              <p>GET IN TOUCH</p>
              <ul className="list-unstyled" />
              <a href="#">
                <li>+1-212-456-7890</li>
              </a>
              <a href="#">
                <li>greatstackdev@gmail.com</li>
              </a>
            </div>
          </div>
          <hr className="border w-100  border-1 border-black" />
          <div className="copy-text">
            <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer
