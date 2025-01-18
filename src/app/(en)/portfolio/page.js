export default function ProductsPage() {
    return <div className="productsPage">
        <a className="productSection" href="/portfolio/solar">
            <img src="/solarenergy-projact.jpg" width="300" height="300" />
            <h2>Solar Energy Projects</h2>
        </a>
        
        <a className="productSection" href="/portfolio/water">
            <img src="/Water-Treatment-Projects.jpg" width="300" height="300" />
            <h2>Water Treatment Projects</h2>
        </a>
        
        <a className="productSection" href="/portfolio/Educational">
            <img src="/Education-Technology-Projects.png" width="300" height="300" />
            <h2>Education Technology Projects</h2>
        </a>
        
        <a className="productSection" href="/portfolio/fire">
            <img src="/Fire-Project.jpg" width="300" height="300" />
            <h2>Fire Projects</h2>
        </a>
    </div>
  }