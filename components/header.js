"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const [token, setToken] = useState(null);

  // Check token from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <div className="first-logo d-flex align-items-center">
            <Image
              width={40}
              height={40}
              src="/img/Group 4123.png"
              alt="Prescripto Logo"
            />
            <span className="logo-text ms-2">Prescripto</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <Link
              className={`nav-link ${path === "/" ? "active" : ""}`}
              href="/"
            >
              HOME
            </Link>
            <Link
              className={`nav-link ${path === "/doctors" ? "active" : ""}`}
              href="/doctors"
            >
              ALL DOCTORS
            </Link>
            <Link
              className={`nav-link ${path === "/about-us" ? "active" : ""}`}
              href="/about-us"
            >
              ABOUT
            </Link>
            <Link
              className={`nav-link ${path === "/contact-us" ? "active" : ""}`}
              href="/contact-us"
            >
              CONTACT
            </Link>
          </div>

          {/* Conditionally show Create Account OR Profile Dropdown */}
          {!token ? (
            <Link className="nav-btn" href="/signup">
              Create Account
            </Link>
          ) : (
            <div className="profile-icon position-relative">
              <input type="checkbox" id="profile-toggle" className="d-none" />

              <label
                htmlFor="profile-toggle"
                className="profile-label d-flex align-items-center gap-2"
              >
                <Image
                  src="/img/profile_img.svg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <i className="fa-solid fa-chevron-down" />
              </label>

              <div className="profile-drop position-absolute bg-white shadow rounded mt-2 p-2">
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/profile">My Profile</Link>
                  </li>
                  <li>
                    <Link href="/my-appointments">My Appointments</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
