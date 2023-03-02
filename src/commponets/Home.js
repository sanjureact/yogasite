import React from "react";
import Header from "./Layout/Header";

export default function Home() {
  return (
    <>
      {" "}
      <Header />{" "}
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
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
                  //   style="font-family: 'Lora', serif; font-weight: 600; letter-spacing: 2px;"
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

                <img
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  // style="background-image: url(gallery-1.jpg)"
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Power Yoga</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn moref
                    </a>
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
                  // style="background-image: url(gallery-2.jpg)"
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Meditation Class</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </a>
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
                  // style="background-image: url(gallery-3.jpg)"
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Aerobics Class</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </a>
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
                  // style="background-image: url(gallery-4.jpg)"
                ></div>
                <div className="text mt-4">
                  <h3 className="mb-4">Spiritual Yoga</h3>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum quasi provident impedit natus
                    exercitationem. Ratione, rerum illo? Molestiae, pariatur!
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn custom-btn bg-color mt-3"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-toggle="modal"
                      data-target="#membershipForm"
                    >
                      Learn more <span className="fa fa-arrow-right"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
