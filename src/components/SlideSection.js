"use client"

import { useEffect, useState } from "react";
let index = 0;
let shouldMove = true;
export default function SlideSection() {
  useEffect(() => {
    setInterval(() => {
      if (shouldMove) {
        move(1);
      }
    }, 3000);
  }, []);

  function move(step) {
    const slide = document.querySelector('.slide-row');
    const firstSlide = document.querySelector('.slide-row .col-md-4');
    const slides = document.querySelectorAll('.slide-row .col-md-4');
    index = (index + step) >= slides.length ? 0 : (index + step < 0 ? slides.length : index + step);
    slide.scrollTo({
      left: index * firstSlide.clientWidth,
      behavior: 'auto'
    });
  }

  return (
    <>
      {/* <!-- we_do --> */}
      <div className="we_do" onMouseEnter={() => {shouldMove = false}} onMouseLeave={() => {shouldMove = true}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="carousel-caption we1_do">
                      <div className="row slide-row">
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              On-Grid
                            </h3>
                            <p>
                              On-Grid systems are solar systems that generate
                              energy only when they are connected to the
                              public electrical power network. They are
                              stations that can be installed in all
                              facilities, homes, schools, factories,
                              hospitals...etc
                            </p>
                            <a className="read_more" href="./blog/index.html">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Off-Grid
                            </h3>
                            <p>
                              These systems are designed for situations that
                              are not connected to the electricity grid, and
                              they provide you with energy by converting the
                              energy generated from solar panels
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Solar Pump
                            </h3>
                            <p>
                              There is no doubt that IST is solutions for
                              operating water wells with solar energy instead
                              of diesel or government electricity are the
                              ideal way to properly invest capital, as it is
                              recovered in a period not exceeding two years
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Solar Heat
                            </h3>
                            <p>
                              Solar heaters are considered an inexpensive way
                              to exploit the heat resulting from sunlight and
                              convert it to benefit by heating the water
                              inside the solar heater
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Solar Light
                            </h3>
                            <p>
                              IST offers lighting systems that operate
                              automatically with sunset. They are independent
                              from the network and do not require additional
                              costs
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Battery bank
                            </h3>
                            <p>
                              Your battery storage needs to be large enough to
                              supply power year-round. Nothing is more
                              frustrating than suffering a power outage
                              because your battery bank doesnit store enough
                              charge
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/wind energy.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              WIND ENERGY
                              <br /> Wind Turbines{" "}
                            </h3>
                            <p>
                              Wind power is the use of air flow through wind
                              turbines to mechanically power generators for
                              electricity. Like our solar farms, wind farms
                              connect multiple turbines directly to the power
                              grid
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/water-treatment.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              WATER TREATMENT
                              <br />
                              Sewage Water Treatment{" "}
                            </h3>
                            <p>
                              We design and supervise the implementation of
                              sewage treatment plants for various production
                              capacities, and we can provide solutions and
                              studies for sewage treatment plants for small
                              and large residential complexes
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/water-treatment.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              WATER TREATMENT
                              <br />
                              Industrial Waste Treatment
                            </h3>
                            <p>
                              We design, construct, operate and maintain
                              industrial waste water treatment plants
                              resulting from different factories and for
                              different production capacities and different
                              pollutants (Industries A - B - C).
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/water-treatment.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              WATER TREATMENT
                              <br />
                              Water Treatment Plants{" "}
                            </h3>
                            <p>
                              ECORD Consulting Company designs and supervises
                              the implementation of water treatment plants
                              (wells - groundwater - seawater) with various
                              production capacities
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/water-treatment.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              WATER TREATMENT
                              <br />
                              Water Levers{" "}
                            </h3>
                            <p>
                              Design and supervise the implementation of all
                              levers (sanitary, industrial, and drinking).
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/education-technology.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              EDUCATIONAL TECHNOLOGY
                              <br />
                              Interactive Educational Screens{" "}
                            </h3>
                            <p>
                              It is the latest technology in the field of
                              smart education. As it is a touch screen and the
                              operating system is Android that can be run on
                              the Windows operating system
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/education-technology.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              EDUCATIONAL TECHNOLOGY
                              <br />
                              Projectors
                            </h3>
                            <p>
                              The projector device is an optical electronic
                              device that is used to better display data,
                              using images and videos. It is also called a
                              data display device or Multimedia Projector Data
                              show
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/education-technology.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              EDUCATIONAL TECHNOLOGY
                              <br />
                              Smart boards
                            </h3>
                            <p>
                              It is a multi-use active interactive whiteboard.
                              It is accompanied by digital pens and an
                              electronic eraser. This whiteboard is connected
                              to the computer and a projector device and turns
                              into a giant computer screen
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/education-technology.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              EDUCATIONAL TECHNOLOGY
                              <br />
                              Maintenance
                            </h3>
                            <p>
                              All of these smart solutions are available, and
                              an authorized maintenance center is also
                              available to maintain all devices and provide
                              all spare parts
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/Fire fighting.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              FIRE FIGHTING
                              <br /> development
                            </h3>
                            <p>
                              The purpose of the fire-fighting check is to
                              protect lives and property. The state forces the
                              owner of establishments, companies and factories
                              to implement a fire-fighting system in the
                              building
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/fire alarm.jpg"
                                alt="#"
                              />
                            </i>
                            <h3>
                              FIRE ALARM
                              <br />
                              development
                            </h3>
                            <p>
                              The purpose of the fire-fighting check is to
                              protect lives and property. The state forces the
                              owner of establishments, companies and factories
                              to implement a fire-fighting system in the
                              building
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              Tracking system
                            </h3>
                            <p>
                              he purpose of the fire-fighting check is to
                              protect lives and property. The state forces the
                              owner of establishments, companies and factories
                              to implement a f
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div id="bo_ho" className="we_box text_align_left">
                            <i>
                              <img
                                className="tem"
                                src="/solar-panel-icon.png"
                                alt="#"
                              />
                            </i>
                            <h3>
                              SOLAR SYSTEMS
                              <br />
                              inverter cabinet
                            </h3>
                            <p>
                              The purpose of the fire-fighting check is to
                              protect lives and property. The state forces the
                              owner of establishments, companies and factories
                              to implement a fire-fighting system in the
                              building
                            </p>
                            <a className="read_more" href="we_do">
                              Read More
                            </a>
                          </div>
                        </div>
                        {/* <!-- <div className="col-md-4">
                                       <div id="bo_ho" className="we_box text_align_left">
                                          <i><img className="tem"src="/fire alarm.jpg" alt="#"/></i>
                                          <h3>FIRE ALARM<br />development</h3>
                                          <p>The purpose of the fire-fighting check is to protect lives and property. The state forces the owner of establishments, companies and factories to implement a fire-fighting system in the building
                                          </p>
                                          <a className="read_more" href="we_do">Read More</a>
                                       </div>
                                    </div> --> */}
                        {/* <!-- <div className="col-md-4">
                                       <div id="bo_ho" className="we_box text_align_left">
                                             <i><img className="tem"src=".././images/solar-panel-icon.png" alt="#"/></i>
                                             <h3>SOLAR SYSTEMS<br />Tracking system</h3>
                                             <p>he purpose of the fire-fighting check is to protect lives and property. The
                                                state forces the owner of establishments, companies and factories to implement
                                                a f
                                             </p>
                                             <a className="read_more" href="we_do">Read More</a>
                                          </div>
                                    </div> --> */}
                      </div>
                     <div className="carousel-buttons-container">
                      <button className="carousel-button carousel-button--left" onClick={() => move(-1)}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button className="carousel-button carousel-button--right" onClick={() => move(1)}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                      </button>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end we_do --> */}
    </>
  );
}
