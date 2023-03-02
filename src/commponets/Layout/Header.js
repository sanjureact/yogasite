import React from "react";

export default function Header() {
  return (
    <>
      <div className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            Om Mantra
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link smoothScroll">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="#gallery" className="nav-link smoothScroll">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a href="#className" className="nav-link smoothScroll">
                  classNameNamees
                </a>
              </li>

              <li className="nav-item">
                <a href="#schedule" className="nav-link smoothScroll">
                  Schedules
                </a>
              </li>

              <li className="nav-item">
                <a href="#team" className="nav-link smoothScroll">
                  Our Team
                </a>
              </li>

              <li className="nav-item">
                <a href="#event" className="nav-link smoothScroll">
                  Events
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link smoothScroll">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
