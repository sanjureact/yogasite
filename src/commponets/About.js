import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/about-1.jpg";
import img2 from "../assets/about-2.jpg";
import img3 from "../assets/about-3.jpg";

export default function About() {
  return (
    <>
      <section className="home-about spad" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="home_about_pic">
                <div
                  className="home_about_pic_item large-item set-bg"
                  data-setbg="about-1.jpg"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {" "}
                  <img src={img1} />
                </div>
                <div className="home_about_pic_item">
                  <div
                    className="home_about_pic_item_inner set-bg"
                    data-setbg="about-2.jpg"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {" "}
                    <img src={img2} />
                  </div>
                  <div
                    className="home_about_pic_item_inner set-bg"
                    data-setbg="about-3.jpg"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    {" "}
                    <img src={img3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="home_about_text"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="section-title">
                  <h2>
                    Welcome to <br />
                    Sanju Yoga
                  </h2>
                </div>
                <span>"What hurts today makes you stronger tomorrow."</span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus debitis quidem culpa quas sint ut mollitia, aliquam
                  blanditiis. Odit totam magnam ullam, consectetur minus, vitae
                  quam quasi officia explicabo saepe tenetur autem quia qui fuga
                  sed rem aperiam quaerat sit!
                </p>
                <p className="para-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium recusandae deleniti cumque molestias magni, sed
                  repellat magnam assumenda fugit vel!
                  <Link
                    to="#"
                    className="btn custom-btn bg-color mt-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    More About Us &rarrhk;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
