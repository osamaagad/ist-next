export const Project = ({ title, children, photos, photo }) => {

  return <div className="projectsec">
    <h2>{title}</h2>
    {children}
    <div className="projectimgone">
      {photo?.map(imgsrc => <img key={imgsrc} src={imgsrc} alt="" />)}
    </div>
    <div className="projectimg">
      {photos?.map(imgsrc => <img key={imgsrc} src={imgsrc} alt="" />)}
    </div>
    
  </div>
}