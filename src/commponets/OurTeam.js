import React from "react";
import img1 from "../assets/19.jpg";
import img2 from "../assets/20.jpg";
import img3 from "../assets/21.jpg";
import img4 from "../assets/22.jpg";
export default function OurTeam() {
  return (
    <>
      <section className="our-team-area section-padding-80-50" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading text-center wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>Our Team</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div
                className="team-content-area text-center mb-30 wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member-thumb">
                  <img src={img1} alt="" />
                </div>
                <h5>Priyanka Patel</h5>
                <span>Instructor</span>
                <div className="member-social-info">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div
                className="team-content-area text-center mb-30 wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member-thumb">
                  <img src={img2} alt="" />
                </div>
                <h5>Radhika Patel</h5>
                <span>Coach</span>
                <div className="member-social-info">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="team-content-area text-center mb-30 wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member-thumb">
                  <img src={img3} alt="" />
                </div>
                <h5>Mayuri Patel</h5>
                <span>Manager</span>
                <div className="member-social-info">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div
                className="team-content-area text-center mb-30 wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member-thumb">
                  <img src={img4} alt="" />
                </div>
                <h5>Nilay Hirpara</h5>
                <span>Trainer</span>
                <div className="member-social-info">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
