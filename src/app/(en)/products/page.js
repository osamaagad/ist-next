export default function ProductsPage() {
    return <div className="productsPage">
        <a className="productSection" href="/products/solar">
            <img src="/front-face-of-product/f-f-solar.jpg" width="300" height="300" />
            <h2>Solar</h2>
        </a>
        
        <a className="productSection" href="/products/water">
            <img src="/front-face-of-product/f-f-water.jpg" width="300" height="300" />
            <h2>Water</h2>
        </a>
        
        <a className="productSection" href="/products/education">
            <img src="/front-face-of-product/f-f-Education.jpg" width="300" height="300" />
            <h2>Education</h2>
        </a>
        
        <a className="productSection" href="/products/Fire">
            <img src="/front-face-of-product/f-f-fire.jpg" width="300" height="300" />
            <h2>Fire Systems</h2>
        </a>
    </div>
  }