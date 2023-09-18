/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 p-0 bg-white">
        <a className="navbar-brand m-0 p-0 " style={{ fontSize: "70px" }}>
         MG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item  active">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Contact</a>
            </li>
          </ul>

          <div className="ms-auto">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
              >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
              >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
              >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
              </div>
      </nav>
    </div>
  );
};
