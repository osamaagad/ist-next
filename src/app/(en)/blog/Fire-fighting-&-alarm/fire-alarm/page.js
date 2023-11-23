import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return (
    <div className="we_do">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Fire Alarm Item</h2>
            </div>
          </div>
        </div>
        <BlogItem
          title="Detectors"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Detectors"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/detectors.webp"
        />

        <BlogItem
          title="Mamual Call Point"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Mamual-Call-Point"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/Mamual-Call-Point.jpg"
        />

        <BlogItem
          title="Alarms"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Alarms"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/Alarms.jpg"
        />

        <BlogItem
          title="Modules"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Modules"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/Modules.jpg"
        />

        <BlogItem
          title="FACP"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/FACP"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/FACP.png"
        />

        <BlogItem
          title="Repeater Panel"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Repeater-Pane"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/Repeater-Panel.jpg"
        />

        <BlogItem
          title="Cables And pipeing"
          href="/blog/Fire-fighting-&-alarm/fire-alarm/Cables&pipeing"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
            modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
            doloribus."
          src="/Cables-And-pipeing.jpg"
        />
      </div>
    </div>
  );
}
