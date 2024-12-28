export const Project = ({ title, children, photos }) => {

  return <div className="projectsec">
    <h2>{title}</h2>
    {children}
    <div className="projectimg">
      {photos?.map(imgsrc => <img key={imgsrc} src={imgsrc} alt="" />)}
    </div>
  </div>
}