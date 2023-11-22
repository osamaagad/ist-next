import BlogItem from "@/components/BlogItem";

export default function BlogPage() {
  return (<div className="we_do">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="titlepage text_align_center">
                 <h2>Fire Fighting Systems</h2>
              </div>
           </div>
        </div>

        <BlogItem
          title="Water Extinguishing System"
          href="/blog/Fire-fighting-&-alarm/Fire fighting/Water-extinguishing-system"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/Water-Extinguishing-System.jpg"
        />

<BlogItem
          title="Gas System"
          href="/blog/Fire-fighting-&-alarm/Fire fighting/gas-system"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/Gas-System.jpg"
        />

        <BlogItem
          title="Foam System"
          href="/blog/Fire-fighting-&-alarm/Fire fighting/Foam-system"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/Foam-system.webp"
        />

        <BlogItem
          title="Powder System"
          href="/blog/Fire-fighting-&-alarm/Fire fighting/Powder-system"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          obcaecati repellendus laboriosam labore vero ipsa et iusto dolores
          modi ex commodi eligendi repudiandae sit ea amet, hic fugiat nihil
          doloribus."
          src="/Powder-System.jpg"
        />
     </div>
  </div>
  );
}