import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo4.jpg";
export default function Header() {
  return (
    <>
      <header>
        <div className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link to="/home" className="navbar-brand">
              <img
                src={logo}
                alt="snj"
                style={{
                  height: " 68px",
                }}
              />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                  <Link to="#home" className="nav-link smoothScroll">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#gallery" className="nav-link smoothScroll">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#className" className="nav-link smoothScroll">
                    Session-Classes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#schedule" className="nav-link smoothScroll">
                    Schedules
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#team" className="nav-link smoothScroll">
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#event" className="nav-link smoothScroll">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#about" className="nav-link smoothScroll">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#about" className="nav-link smoothScroll">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#contact" className="nav-link smoothScroll">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
