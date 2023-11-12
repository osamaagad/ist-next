export default function BlogItem({ title, text, src, href }) {
  return (
    <div className="row blog-item">
      <div className="col-md-12">
        <img src={src} alt="solar energy" className="blog-item__img" />

        <div>
          <div className="blog-item__title">
            <h3><a href={href}>{title}</a></h3>
          </div>

          <p>
            {text}
          </p>
          <a href="./Fire-fighting-&-alrme.html" className="blog-item__link">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
