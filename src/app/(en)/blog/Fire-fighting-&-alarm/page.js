import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Fire Fighting And Fire Alarm</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="Fire Fighting"
          href="/blog/Fire-fighting-&-alarm/Fire-fighting"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/fire --fighting.jpg"
        />

        <BlogItem
          title="Fire Alarm"
          href="/blog/Fire-fighting-&-alarm/fire-alarm"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/fire-alarm-system.webp"
        />
     </div>
  </div>
}