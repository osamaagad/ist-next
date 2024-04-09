export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3">
                  <a className="logo_footer" href="index.html"><img src="images/logo_footer.png" alt="#" /></a>
               </div>
               <div className="col-md-9">
                  <form className="newslatter_form">
                     <input className="ente" placeholder="Enter your email" type="text" name="Enter your email">
                     <button className="subs_btn">Sbscribe Now</button>
                  </form>
               </div> */}
            <div className="col-md-4 col-sm-6">
              <div className="Informa helpful">
                <h3>Useful Link</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="./blog/index.html">Blog</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="Informa">
                <h3>company</h3>
                <p>
                IST is an Egyptian joint stock company established to
                provide industrial solutions,integrated solar energy
                solutions, and water treatment and desalination in a way
                that suits the needs of the local and regional market
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="Informa conta">
                <h3>contact Us</h3>
                <ul>
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      2030 Al Merrag , Carrefour Road , Al Maddi , Cairo, Egypt
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>{" "}
                      28 Tutankhamun , Smouha , Alexandria, Egypt
                    </a>
                  </li>
                  <li>
                    <a href="tel:00201157140576">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span dir="ltr">+20 1157140576</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:00201222586554">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <span dir="ltr"> +20 1222586554</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      info@ist-energy.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text_align_left">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-6">
                <p>
                  © 2023 All Rights Reserved.{" "}
                  <a href="#"> IST Energy</a>
                </p>
              </div>
              <div className="col-md-6">
                <ul className="social_icon text_align_center">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
