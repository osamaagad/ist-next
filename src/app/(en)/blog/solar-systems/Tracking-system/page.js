export default function BlogPage() {
  return (
    <div class="blog-post">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage text_align_center">
              <h1>Tracking System</h1>
            </div>
          </div>
        </div>
        <section class="blog-section">
          <p>
            A typical solar tracking system adjusts the face of the solar panel
            or reflective surfaces to align with the sun as it moves across the
            sky. The system moves though one rotation per day. It is this
            relatively slow motion that enables the time-compression approach
            for ALT. The time-compression ALT approach entails using the system
            more often than under normal conditions. For a solar tracker, we may
            be able to increase the speed of the tracking to experience an
            entire day of movement in an hour, for example. If we run the test
            though 24 cycles per day, the system experiences 24 days of use in 1
            day. The calculation of the acceleration factor is then (11.9) AF =
            use cycle duration test cycle duration = 24 h 1 h = 24 Time
            compression in this fashion is easy to use and understand. In the
            above simple example, the acceleration factor is 24, or each day of
            testing represents 24 days of use. One consideration is in verifying
            whether the failure mechanisms of interest have the same chance of
            occurring as when the system is in actual use. One can imagine a
            test that cycles the solar tracking system so fast that the heat
            buildup and associated failures that occur have little to do with
            the failures during actual use. In the design of the test, one must
            be careful not to introduce conditions that would alter the causes
            of failure, thus inducing failures that are irrelevant. Another
            consideration is that the use of a system in the field experiences a
            wide range of environmental conditions that are difficult to
            reproduce in the laboratory. If dust buildup is an important element
            causing tracker motor failures, then including some replica of dust
            buildup during ALT may be necessary. The closer the testing
            conditions mimic the use conditions, the better. In most cases,
            understanding the failure mechanisms and the primary stresses that
            cause the failure to occur enables the design of a meaningful
            accelerated life test..
          </p>
        </section>

        <img
          src="/Tracking-System3.jpg"
          alt="solar energy"
          class="blog-post__image"
        />
        <section class="blog-section">
          <h2>Single Axis</h2>
          <p>
            <b>Single-axis</b> solar tracking systems follow the solar by moving
            in a single axis (vertical or horizontal). Generally, the
            inclination angle is adjusted manually at certain intervals during
            the year and automatic movement is provided in the east–west
            direction. Single-axis systems are more cost-effective than two-axis
            systems but have lower yields in terms of efficiency. Single-axis
            solar tracking systems are moved on the vertical or horizontal axis
            depending on the solar trajectory and the weather condition
          </p>
        </section>

        <img
          src="/Tracking-System2.webp"
          alt="solar energy"
          class="blog-post__image"
        />

        {/* <video src="/video.mp4"></video> */}

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BlyIHrIJoT0?si=JufYMp186iuydrK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <section class="blog-section">
          <h2>Dual Axis</h2>
          <p>
            While single-axis utility-scale solar tracker installations have
            widely proliferated in the heady solar market, the more commercial
            and industrial-oriented dual-axis tracker has not enjoyed such rapid
            growth, despite the economic advantages the second axis offers by
            following the sun much more closely. Part of the reason that the
            market for dual-axis trackers has not boomed is that most U.S.
            manufacturers are smaller companies, compared with the large
            corporate manufacturers of single-axis trackers. Another reason is
            that single-axis trackers are most economic in regions with large
            flat sites, like the U.S. Southeast and Southwest, where
            utility-scale projects are largely centered, although this is
            changing. Another key reason is that many developers focus primarily
            on up-front project cost rather than lifetime yield and low ROI.
          </p>
        </section>

        <img src="/Tracking-System1.webp" alt="solar energy" class="blog-post__image" />
        {/* <section class="blog-section">
          <h2>الطاقة الشمسية</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus.
          </p>
        </section> */}
      </div>
    </div>
  );
}
