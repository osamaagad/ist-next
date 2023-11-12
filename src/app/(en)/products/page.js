export default function ProductsPage() {
    return <div className="productsPage">
        <a className="productSection" href="/products/solar">
            <img src="/prot1.png" width="300" height="300" />
            <h2 className="productPageTitle">Solar</h2>
        </a>
        
        <a className="productSection" href="/products/water">
            <img src="/prot1.png" width="300" height="300" />
            <h2>Water</h2>
        </a>
        
        <a className="productSection" href="/products/education">
            <img src="/prot1.png" width="300" height="300" />
            <h2>Education</h2>
        </a>
        
        <a className="productSection" href="/products/firefighting">
            <img src="/prot1.png" width="300" height="300" />
            <h2>Firefighting</h2>
        </a>
    </div>
  }