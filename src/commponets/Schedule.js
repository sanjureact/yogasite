import React from "react";

export default function Schedule() {
  return (
    <>
      <section
        className="classtime-section class-time-table spad"
        id="schedule"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Classtime Table</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="timetable-controls">
                <ul>
                  <li className="active" data-tsfilter="all">
                    all class
                  </li>
                  <li data-tsfilter="Yoga">Yoga</li>
                  <li data-tsfilter="Aerobics">Aerobics</li>
                  <li data-tsfilter="Wushu">Wushu</li>
                  <li data-tsfilter="Karate">Karate</li>
                  <li data-tsfilter="Medetation">Medetation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="classtime-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="workout-time">10:00</td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>10:00 - 14:00</span>
                    <h6>Yoga</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>10:00 - 15:00</span>
                    <h6>Yoga</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Aerobics">
                    <span>10:00 - 13:00</span>
                    <h6>Aerobics</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Aerobics">
                    <span>10:00 - 13:30</span>
                    <h6>Aerobics</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">14:00</td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Aerobics">
                    <span>14:00 - 17:00</span>
                    <h6>Aerobics</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>14:00 - 17:00</span>
                    <h6>Yoga</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Karate">
                    <span>14:00 - 15:30</span>
                    <h6>Karate</h6>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="workout-time">16:00</td>
                  <td className="hover-bg ts-item" data-tsmeta="Aerobics">
                    <span>16:00 - 18:00</span>
                    <h6>Aerobics</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Medetation">
                    <span>16:00 - 19:00</span>
                    <h6>Medetation</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Medetation">
                    <span>16:00 - 19:00</span>
                    <h6>Medetation</h6>
                  </td>
                  <td className="hover-bg ts-item" data-tsmeta="Wushu">
                    <span>16:00 - 17:00</span>
                    <h6>Wushu</h6>
                  </td>
                  <td className="hover-bg ts-item" data-tsmeta="Wushu">
                    <span>16:00 - 20:00</span>
                    <h6>Wushu</h6>
                  </td>
                </tr>
                <tr>
                  <td className="workout-time">18:00</td>
                  <td className="hover-bg ts-item" data-tsmeta="Karate">
                    <span>18:00 - 20:00</span>
                    <h6>Karate</h6>
                  </td>
                  <td className="hover-bg ts-item" data-tsmeta="Wushu">
                    <span>18:00 - 20:00</span>
                    <h6>Wushu</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>18.00 - 22.00</span>
                    <h6>Yoga</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Wushu">
                    <span>18:00 - 22:00</span>
                    <h6>Wushu</h6>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="workout-time">20:00</td>
                  <td className="hover-bg ts-item" data-tsmeta="Aerobics">
                    <span>21:00 - 23:00</span>
                    <h6>Aerobics</h6>
                  </td>
                  <td className="hover-bg ts-item" data-tsmeta="Karate">
                    <span>20:00 - 22:00</span>
                    <h6>Karate</h6>
                  </td>
                  <td className="hover-bg ts-item" data-tsmeta="Karate">
                    <span>20:30 - 23:00</span>
                    <h6>Karate</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>22:00 - 23:00</span>
                    <h6>Yoga</h6>
                  </td>
                  <td></td>
                  <td className="hover-bg ts-item" data-tsmeta="Yoga">
                    <span>21:00 - 23:00</span>
                    <h6>Yoga</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
