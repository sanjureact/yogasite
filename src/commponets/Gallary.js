import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/work-1.jpg";
import img2 from "../assets/work-2.jpg";
import img3 from "../assets/work-3.jpg";
import img4 from "../assets/work-4.jpg";
import img5 from "../assets/work-5.jpg";
import img6 from "../assets/work-6.jpg";
import img7 from "../assets/work-7.jpg";
import img8 from "../assets/work-8.jpg";

export default function Gallary() {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb" id="gallery">
        <div className="container">
          <div className="row no-gutters justify-content-center mb-5 pb-2">
            <div className="col-md-6 text-center heading-section">
              <span className="subheading">Gallery</span>
              <h2 className="mb-4">Our Gallery</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                magnam commodi exercitationem dolorem nesciunt. Enim?
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img1} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-1.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img2} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-2.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img3} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-3.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img4} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-4.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img5} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-5.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img6} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-6.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img7} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-7.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project">
                <img src={img8} alt="" className="img-fluid" />
                <div className="text">
                  <span>Asana</span>
                  <h3>
                    <Link to="#">Yoga</Link>
                  </h3>
                </div>
                <Link
                  to="work-8.jpg"
                  className="d-flex justify-content-center align-items-center"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
