import React from "react";
import img1 from "../assets/event-1.jpg";
import img2 from "../assets/play.png";
import img3 from "../assets/event-2.jpg";
import img4 from "../assets/event-3.jpg";
import img5 from "../assets/event-4.jpg";

export default function Event() {
  return (
    <>
      <section className="event-section spad bg-light" id="event">
        <div className="container">
          <div className="section-title text-center">
            <h2>Upcoming Events</h2>
            <p>Have a balance of perfect body and calm soul.</p>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="event-video">
                <img src={img1} alt="" className="event-img" />
                <a href="#" className="video-popup">
                  <img src={img2} alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="event-item">
                <div className="ei-img">
                  <img src={img3} alt="" className="event-img" />
                </div>
                <div className="ei-text">
                  <h4>
                    <a href="#">Yoga Competetion</a>
                  </h4>
                  <ul>
                    <li>
                      <i className="material-icons">person</i>Nilay Hirpara
                    </li>
                    <li>
                      <i className="material-icons">event_available</i>28 June,
                      2021
                    </li>
                    <li>
                      <i className="material-icons">map</i>909 De Villa Resto
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event-item">
                <div className="ei-img">
                  <img src={img4} alt="" className="event-img" />
                </div>
                <div className="ei-text">
                  <h4>
                    <a href="#">Aerobics Competetion</a>
                  </h4>
                  <ul>
                    <li>
                      <i className="material-icons">person</i>Nilay Hirpara
                    </li>
                    <li>
                      <i className="material-icons">event_available</i>15
                      January, 2021
                    </li>
                    <li>
                      <i className="material-icons">map</i>TGB HALL Vesu
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event-item">
                <div className="ei-img">
                  <img src={img5} alt="" className="event-img" />
                </div>
                <div className="ei-text">
                  <h4>
                    <a href="#">Karate Competetion</a>
                  </h4>
                  <ul>
                    <li>
                      <i className="material-icons">person</i>Nilay Hirpara
                    </li>
                    <li>
                      <i className="material-icons">event_available</i>21 June,
                      2021
                    </li>
                    <li>
                      <i className="material-icons">map</i>Orange Hall
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
