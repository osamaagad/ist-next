import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return (
    <div className="we_do">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Educational Technology</h2>
            </div>
          </div>
        </div>

        <BlogItem
          title="Interactive Educational Screens "
          href="/blog/Educational-technology/Interactive-Educational-Screens"
          text="It is the latest technology in the field of smart education. As it is a touch screen and the operating system is Android that can be run on the Windows operating system, it is also equipped with an integrated educational system to help the teacher raise the level of the educational process to another level"
          src="/Interactive-Educational-Screens.webp"
        />

        <BlogItem
          title="Projectors"
          href="/blog/Educational-technology/Projectors"
          text="The projector device is an optical electronic device that is used to better display data, using images and videos. It is also called a data display device or Multimedia Projector Data show. It is also called a multimedia display device."
          src="/Projectors.webp"
        />

        <BlogItem
          title="Smart boards"
          href="/blog/Educational-technology/Smart-boards"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/Smart-boards.jpg"
        />

        <BlogItem
          title="Maintenance"
          href="/blog/Maintenance"
          text="  All of these smart solutions are available, and an authorized maintenance center is also available to maintain all devices and provide all spare parts."
          src="/Maintenance.webp"
        />
      </div>
    </div>
  );
}
