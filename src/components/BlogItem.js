export default function BlogItem({ title, text, src, href }) {
  return (
    <div className="row blog-item">
      <div className="col-md-12">
        <a href={href}>
          <img src={src} alt="solar energy" className="blog-item__img" />
        </a>

        <div>
          <div className="blog-item__title">
            <h3><a href={href}>{title}</a></h3>
          </div>

          <p>
            {text}
          </p>
          <a href={href} className="blog-item__link">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
