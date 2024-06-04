import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Water Treemant</h2>

      <ProductList
        tagItems={{
          'Control Valve': {},
          'Membranes': {},
          'Dosing pump': {},
          'Vessels': {},
          'Media': {},
        }}
        products={[
          {
            name: 'Jack',
            href: '/products/water/control-valve/jack',
            imgUrl: '/water-product/control-valve/jack/jack.png',
            tags: ['Control Valve']
          },

          {
            name: 'Antech Nano Series',
            href: '/products/water/Dosing-Pump/Antech-Nano-Series',
            imgUrl: '/water-product/Dosing-Pump/Antech-Nano-Series/Antech.png',
            tags: ['Dosing pump']
          },
          {
            name: 'FWT',
            href: '/products/water/Dosing-Pump/FWT',
            imgUrl: '/water-product/Dosing-Pump/FWT/FWT.png',
            tags: ['Dosing pump']
          },
          {
            name: 'HC100',
            href: '/products/water/Dosing-Pump/HC100',
            imgUrl: '/water-product/Dosing-Pump/HC100/HC.png',
            tags: ['Dosing pump']
          },

          {
            name: 'Active Carbon',
            href: '/products/water/media/ACTIVE-CARBON',
            imgUrl: '/water-product/media/ACTIVE-CARBON/ACT-CARBON.jpeg',
            tags: ['Media']
          },
          {
            name: 'MSDS Calcium Hypochlorite',
            href: '/products/water/media/MSDS-Calcium-Hypochlorite',
            imgUrl: '/water-product/media/MSDS-Calcium-Hypochlorite/MSDS.jpg',
            tags: ['Media']
          },
          {
            name: 'Purolite MB400',
            href: '/products/water/media/Purolite-MB400',
            imgUrl: '/water-product/media/Purolite-MB400/Purolite.jpg',
            tags: ['Media']
          },
          {
            name: 'TDS-830 coal based',
            href: '/products/water/media/TDS-830-coal-based-GAC-IV800',
            imgUrl: '/water-product/media/TDS-830-coal/TDS.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },

          {
            name: 'Dupont Membranes',
            href: '/products/water/Membranes/LC-HR',
            imgUrl: '/water-product/Membranes/LC-HR/LC-HR.jpg',
            tags: ['Membranes']
          },
          {
            name: 'LG Membranes',
            href: '/products/water/Membranes/LG-membranes',
            imgUrl: '/water-product/Membranes/LG-membranes/LC-HR.jpg',
            tags: ['Membranes']
          },
          {
            name: 'Z-Plus USA',
            href: '/products/water/Membranes/z-plus',
            imgUrl: '/water-product/Membranes/z-plus/z-plus.jpg',
            tags: ['Membranes']
          },

          {
            name: 'Product 3',
            href: '/products/water/vessels/Strong-PV',
            imgUrl: '/water-product/vessels/Strong-PV/Strong-PV.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Pro125312duct 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3adfasdf',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Prasfdadsoduct 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3adsfasdf',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
        ]}
      />
    </div>
  );
}
