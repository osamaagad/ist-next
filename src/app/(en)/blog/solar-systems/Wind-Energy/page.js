export default function BlogPage() {
  return (
    <div class="blog-post">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage text_align_center">
              <h1>Wind  Energy</h1>
            </div>
          </div>
        </div>
        <section class="blog-section">
          <p>
          In 2022, wind supplied over 2000 TWh of electricity, which was over 7% of world electricity,and about 2% of world energy. With about 100 GW added during 2021, mostly in China and the United States, global installed wind power capacity exceeded 800 GW. To help meet the Paris Agreement goals to limit climate change, analysts say it should expand much faster - by over 1% of electricity generation per year.
          </p>
        </section>

        <img
          src="/wind3.jpg"
          alt="solar energy"
          class="blog-post__image"
        />
        <section class="blog-section">
          <p>
          Wind power is the use of air flow through wind turbines to mechanically power generators for electricity. Like our solar farms, wind farms connect multiple turbines directly to the power grid, replacing conventional power stations. Wind power varies significantly over the year and is often complemented with other sources of electricity to ensure consistent power generation.
          </p>
        </section>

        <img
          src="/wind1.png"
          alt="solar energy"
          class="blog-post__image"
        />

        {/* <video src="/video.mp4"></video> */}

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BlyIHrIJoT0?si=JufYMp186iuydrK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <section class="blog-section">
          <h2>How a Wind Turbine Works?</h2>
          <p>
          A wind turbine turns wind energy into electricity using the aerodynamic force from the rotor blades, which work like an airplane wing or helicopter rotor blade. When wind flows across the blade, the air pressure on one side of the blade decreases. The difference in air pressure across the two sides of the blade creates both lift and drag. The force of the lift is stronger than the drag and this causes the rotor to spin. The rotor connects to the generator, either directly "if it's a direct drive turbine" or through a shaft and a series of gears "a gearbox" that speed up the rotation and allow for a physically smaller generator. This translation of aerodynamic force to rotation of a generator creates electricity.
          </p>
        </section>

        <img
          src="/wind2.png"
          alt="solar energy"
          class="blog-post__image"
        />
        <section class="blog-section">
          <h2>Types of wind turbines by shaft and blades</h2>
          <p>
          <b>1.</b>Wind turbines with blades and horizontal axis. These are the most common ones we can see in most Al Zaafarana  wind farms. The axis of rotation is parallel to the ground, and they have a great hub height and a rotor mechanism that guides the wind turbine to follow the changes of the wind directions. 
          </p>
        </section>
        <img
          src="/Wind-power.jpg"
          alt="solar energy"
          class="blog-post__image"
        />
        <section class="blog-section">
          
          <p>
          <b>2.</b>Wind turbines with blades and vertical axis. The axis of rotation is perpendicular to the ground. The edges do not need to face the wind and do not need a lot of vertical height to harness their power. The caveat? They are less efficient. 
          </p>
        </section>
        <img
          src="/wind4.webp"
          alt="solar energy"
          class="blog-post__image"
        />
      </div>
    </div>
  );
}
