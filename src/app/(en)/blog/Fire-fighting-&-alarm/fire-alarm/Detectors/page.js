export default function BlogPage() {
  return (
    <div class="blog-post">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage text_align_center">
              <h1>Detectors</h1>
            </div>
          </div>
        </div>

        <section class="blog-section">
          <h2>What is Fire detector?</h2>
          <p>
            A device which can detect a fire, and provide a signal to an alarm
            circuit. Fire detectors can be operated by smoke, flames, and heat,
            or any combination of these factors. Flame detectors are rarely used
            on board ships these days. Heat detectors are used in places such as
            the galley and laundry. Smoke detectors are used in machinery
            spaces, accommodation areas and cargo holds.
          </p>
        </section>
        <img
          src="/Detectors1.jpg"
          alt="solar energy"
          class="blog-post__image"
        />

        <img
          src="/Detectors2.webp"
          alt="solar energy"
          class="blog-post__image"
        />

        {/* <video src="/video.mp4"></video> */}

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BlyIHrIJoT0?si=JufYMp186iuydrK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        {/* <section class="blog-section">
          <h2>الطاقة الشمسية</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus.
          </p>
        </section> */}

        
        <section class="blog-section">
          <h2>Main Types of Fire Detectors</h2>
          <p>
            <b>Heat Detector</b> Heat detectors are generally used in storage closets,
            warehouses or other rooms that aren't frequently occupied. They will alert you when there's a rise in the room temperature or if there's
            a significant amount of heat in the room. The issue with heat
            detectors is they take a little longer to detect a fire than smoke detectors. However, they have fewer false alarms because they don't
            go off when there's steam, dust, humidity or precipitation.
            <br/><b>Ionization Smoke Detector</b> Ionization smoke detectors are usually
            found in commercial kitchens and restaurants. They activate when there's smoke present in the air. The detector has two metal plates
            inside, which have a constant electric current that flows back and forth. Once smoke enters the chamber, the current will no longer
            flow and the alarm will sound. Photoelectric Smoke Detector
            <br/><b>Photoelectric detectors</b> are great for detecting small fires. They
            are similar to ionization detectors, but instead of using an
            electric current, they use a beam of light to detect smoke. When smoke enters the chamber on the photoelectric detector, then it will
            interfere with the light and the alarm will go off.
            <br/><b>Ionization and Photoelectric Smoke Detector</b> A smoke detector that senses both
            ionization and photoelectric smoke is the best way to arm your building. This detector combines both the ionization and
            photoelectric detectors to work as one unit. When there's smoke in
            the air, it will disrupt both the beam of light and electric
            current, which will cause the alarm to sound. The best thing about this detector is it works as a 2-in-1 system, however it won't be able to detect heat
          </p>
        </section>
        <img
          src="/fire-detectors3.jpg"
          alt="solar energy"
          class="blog-post__image"
        />
      </div>
    </div>
  );
}
