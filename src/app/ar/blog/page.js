import BlogItem from "@/components/BlogItem"

export default function BlogPage() {
  return <div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>المدونه</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="أنظمه الطاقه الشمسيه"
          href="/ar/blog/solar-systems"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/blog-solar.jpg"
        />

        <BlogItem
          title="معالجه المياه"
          href="/ar/blog/water-treatment"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/blod-water.webp"
        />

        <BlogItem
          title="تكنولوجيا التعليم"
          href="/ar/blog/educational-technology"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/blog-Education.jpg"
        />

        <BlogItem
          title="انظمه مكافحه وانذار الحريق"
          href="/ar/blog/fire-fighting-systems"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/blog-fire-fighting.jpg"
        />
     </div>
  </div>
}