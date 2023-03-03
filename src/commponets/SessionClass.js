import React from "react";
import vedio1 from "../assets/1.mp4";
import vedio2 from "../assets/video2.mp4";
import vedio3 from "../assets/video3.mp4";
import img1 from "../assets/tv.png";
function SessionClass() {
  return (
    <>
      <section className="class section style-cards" id="class">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center mb-5">
              <h6 data-aos="fade-up">Get a Perfect Body</h6>
              <h1 data-aos="fade-up" data-aos-delay="200">
                Our Training Classes
              </h1>
            </div>

            <div className="card-3" data-aos="fade-up" data-aos-delay="200">
              <div className="desc-3">
                <h3 className="mb-2">Yoga Training</h3>
                <p>
                  The word “Yoga” essentially means, “that which brings you to
                  reality”. Literally, it means “union.” Union means it brings
                  you to the ultimate reality, where individual manifestations
                  of life are surface bubbles in the process of creation.
                </p>
              </div>
              <img
                src={img1}
                alt="Yoga"
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <video autoPlay muted loop id="myVideo">
                <source src={vedio2} type="video/mp4" />
              </video>
            </div>
            <div className="card-2" data-aos="fade-up" data-aos-delay="200">
              <img
                src={img1}
                alt="Yoga"
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <video autoPlay muted loop id="myVideo">
                <source src={vedio3} type="video/mp4" />
              </video>

              <div className="desc-2">
                <h3 className="mb-2">Cardio Training</h3>
                <p>
                  Cardio Yoga is a type of yoga class that combines Yoga moves
                  with cardiovascular exercises. The workout takes classic yoga
                  moves and makes them a bit faster, with a more rapid flow
                  between sequences. The non-stop movement gets your heart
                  beating and your muscles burning.
                </p>
              </div>
            </div>
            <div className="card-3" data-aos="fade-up" data-aos-delay="200">
              <div className="desc-3">
                <h3 className="mb-2">Yoga Training</h3>
                <p>
                  "Meditation, which is the practice of focused concentration,
                  bringing yourself back to the moment over and over again,
                  actually addresses stress, whether positive or negative."
                  Meditation can also reduce the areas of anxiety, chronic pain,
                  depression, heart disease and high blood pressure.
                </p>
              </div>
              <img
                src={img1}
                alt="Yoga"
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <video autoPlay muted loop id="myVideo">
                <source src={vedio1} />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SessionClass;
