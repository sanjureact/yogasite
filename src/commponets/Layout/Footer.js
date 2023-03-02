import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer_about">
                  <span>Sanju Yoga </span>
                  <ul>
                    <li>
                      <i className="fa fa-clock-o"></i> Mon - Fri : 08:30am -
                      09:00pm
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i> Sat - Sun : 08:30am -
                      01:30pm
                    </li>
                  </ul>
                  <form action="#" className="subscribe-form">
                    <input type="text" placeholder="Your Email" />
                    <button type="submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer_widget">
                  <h5>Inspiration</h5>
                  <ul>
                    <li>
                      <Link to="#">Yoga</Link>
                    </li>
                    <li>
                      <Link to="#">Spiritual</Link>
                    </li>
                    <li>
                      <Link to="#">Karate</Link>
                    </li>
                    <li>
                      <Link to="#">Aerobics</Link>
                    </li>
                    <li>
                      <Link to="#">Medetation</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget">
                  <h5>About Us</h5>
                  <ul>
                    <li>
                      <Link to="#">Our Vision</Link>
                    </li>
                    <li>
                      <Link to="#">Our Mission</Link>
                    </li>
                    <li>
                      <Link to="#">Meet the team</Link>
                    </li>
                    <li>
                      <Link to="#">Introduce</Link>
                    </li>
                    <li>
                      <Link to="#">Customer Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget">
                  <h5>Contact Us</h5>
                  <ul className="footer-address">
                    <li>
                      <i className="fa fa-phone"></i>888 7777 6666
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>sanjuyoga@gmail.com
                    </li>
                    <li>
                      <i className="fa fa-location-arrow"></i>202 - 203 Luxuria
                      Business Club jaipur,
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_copyright">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="footer_copyright_text">
                    <p>Copyright &copy; 2020 Om Mantra - All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="footer_copyright_social">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
