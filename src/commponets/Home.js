import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/gallery-1.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";
import img4 from "../assets/gallery-4.jpg";
import img5 from "../assets/event-3.jpg";

export default function Home() {
  return (
    <>
      {" "}
      <Header />{" "}
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
        style={{
          backgroundImage: `url(${img5})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "50px",
        }}
      >
        <div className="bg-overlay">
          <video autoPlay muted loop id="myVideo">
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mt-5 text-center">
                <h4
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    fontFamily: "Lora",
                    fontWeight: "600",
                    letterSpacing: "2px",
                  }}
                >
                  For your Inner Peace
                </h4>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-black"
                  //   style="font-family: 'Baloo 2', cursive;"
                >
                  Be Alive. Be Strong. Be Fit. Be Relaxed. Be Happy. Just be.
                </h1>

                {/* <img
                  data-aos="fade-up"
                  data-aos-delay="600"
                  src="Apple_Store.png"
                  alt="Apple_Store"
                  className="mt-3 down apple"
                />
                <img
                  data-aos="fade-up"
                  data-aos-delay="700"
                  src="google-play-app.png"
                  alt="Play_store"
                  className="mt-3 down play-store"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <Carousel infiniteLoop useKeyboardArrows autoPlay interval={1000}>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
            <div>
              <img src={img4} />{" "}
            </div>
            <img src={img5} />
          </Carousel>
        </div>
      </section> */}
      <section className="ftco-section bg-light" id="feature">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Power Yoga</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn moref
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Meditation Class</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img3})` }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Aerobics Class</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="offer-deal text-center">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${img4})` }}
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Spiritual Yoga</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
