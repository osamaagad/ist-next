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
                            and Renewabla Energy
                          </h1>
                          <p>
                            Renewabla Energy Service <br />
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
                            and Renewabla Energy
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
                            and Renewabla Energy
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
                            and Renewabla Energy
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
      <SlideSection />
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
              <a className="read_more" href="portfolio.html">
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
