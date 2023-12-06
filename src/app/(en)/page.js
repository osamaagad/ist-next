import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SlideSection from "@/components/SlideSection";

export default function () {
  return (
    <>
      <div id="top_section" className=" banner_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            I S T<br />
                            Engineering Solutions <br />
                            and Renewable Energy
                          </h1>
                          <p>
                            Renewable Energy Service <br />
                            Solar System With Applications And Wind Energy
                          </p>
                          <a className="read_more" href="about.html">
                            About Company{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            Contact{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            I S T<br />
                            Engineering Solutions <br />
                            and Renewable Energy
                          </h1>
                          <p>
                            {" "}
                            Water Treatment Service
                            <br />
                            Sewage Water Treatment, Industrial Waste And Water
                            Treatment Plants
                          </p>
                          <a className="read_more" href="about.html">
                            About Company{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            Contact{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            I S T<br />
                            Engineering Solutions <br />
                            and Renewable Energy
                          </h1>
                          <p>
                            Education Technology Service
                            <br />
                            Interactive Educational Screens, Projectors, Smart
                            boards And Maintenance
                          </p>
                          <a className="read_more" href="about.html">
                            About Company{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            Contact{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="carousel-caption relative">
                        <div className="bluid">
                          <h1>
                            I S T<br />
                            Engineering Solutions <br />
                            and Renewable Energy
                          </h1>
                          <p>
                            Fier Fighting & Fire Alarm Service
                            <br />
                            Design, Installation And Operation
                          </p>
                          <a className="read_more" href="about.html">
                            About Company{" "}
                          </a>
                          <a className="read_more" href="contact.html">
                            Contact{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end slider section --> */}
      <SlideSection title="Blog">
        <>
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
                  src="/Fire-fighting.jpg"
                  alt="#"
                />
              </i>
              <h3>
                FIRE FIGHTING
                <br /> 
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
                  src="/fire-alarm.jpg"
                  alt="#"
                />
              </i>
              <h3>
                FIRE ALARM
                <br />
                
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
        </>
      </SlideSection>
      {/* <!-- about --> */}
      {/* <!-- <div className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>About Company</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have </p>
                  </div>
               </div>
            </div>
         </div>
      </div> --> */}
      <div className="container">
        <hr />
      </div>
      {/* <!-- end about --> */}
      {/* <!-- portfolio --> */}
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_left">
                <h2>We Have Done Portfolio </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_left">
                <figure>
                  <img
                    className="prot-img"
                    src="/solar-system-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>SOLAR SYSTEMS</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_left">
                <figure>
                  <img
                    className="prot-img"
                    src="/Water-Treatment-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>WATER TREATMENT</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_left">
                <figure>
                  <img
                    className="prot-img"
                    src="/education-technology-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>EDUCATIONAL TECHNOLOGY</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majoraity have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div id="ho_nf" className="portfolio_main text_align_left">
                <figure>
                  <img
                    className="prot-img"
                    src="/fire-fighting-proj.jpg"
                    alt="#"
                  />
                  <div className="portfolio_text">
                    <div className="li_icon">
                      {/* <!--<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>-->
                              <!--<a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>--> */}
                    </div>
                    <h3>FIRE FIGHTING</h3>
                    <p>
                      Pump Room including: two main pumps electrical and
                      diesel,Main Pumps (Electrical , Diesel): 750 gpm @ 8 bar,
                      3000 rpm. Each And Jockey Pump: 125 gpm @9 bar, 2900 rpm
                    </p>
                  </div>
                </figure>
              </div>
            </div>
            <div className="col-md-12">
              <a className="read_more" href="/portfolio">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end portfolio --> */}
      {/* <!-- chose --> */}
      <div className="chose">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-12">
              <div className="titlepage text_align_left">
                <h2>Why Chose us</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose1.png" alt="#" />
                </i>
                <h3>Project Done </h3>
                <strong>1000+</strong>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose2.png" alt="#" />
                </i>
                <h3>Happy Clients </h3>
                <strong>900+</strong>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="chose_box">
                <i>
                  <img src="/chose3.png" alt="#" />
                </i>
                <h3>Awards</h3>
                <strong>100+</strong>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end chose --> */}
      {/* <!-- contact --> */}
      <div className="contact">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="titlepage text_align_left">
                <h2>Get In Touch</h2>
              </div>
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="type"
                      name=" Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-md-6">
                  <div className="titlepage text_align_left">
                     <h2>What Says Clients</h2>
                  </div>
                  <div id="clientsl" className="carousel slide our_clientsl" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#clientsl" data-slide-to="0" className="active"></li>
                        <li data-target="#clientsl" data-slide-to="1"></li>
                        <li data-target="#clientsl" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container">
                              <div className="carousel-caption posi_in">
                                 <div className="clientsl_text">
                                    <i><img src="/clint.jpg" alt="#"/></i>
                                    <h3>Deno <img src="/icon.png" alt="#"/></h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem IpsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#clientsl" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#clientsl" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
