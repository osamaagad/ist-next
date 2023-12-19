import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Solar</h2>

      <ProductList
        tagItems={{
          'Solar Panels':{},
          'Battery': {
            'Gel': {},
            'Lithium': {}
          },
          'Inverter': {
            'Off Grid': {},
            'On Grid': {},
            'Solar Pump':{},
            'Industerial':{}
          },
          'Solar Lighting':{
            'T T':{},
            'Ceilling':{},
            'Crossbow 4':{},
            'Crossbow 5':{},
            'Crossbow 6':{},
            'Wawa':{},
            'King light':{},

          },
          'Solar UPS':{
            'Power Can':{},
            'Smart Power':{},
            'Smart Power':{},
            'Made In Eygpt':{}
          },
          'Mounting System':{},
          'Cables':{
            'DC':{},
            'AC':{}
          },
          'Solar Heatting':{
            'flat plate':{},
            'evacuated tube':{}
          },
          'Tracking System':{
            'Single Axis':{},
            'Dual Axis':{}
          },
          'Pump':{
            'Submerged':{},
            'Superficial':{}
          },
          'Protection':{
            'MCB':{},
            'MCCB':{},
            'MC4':{},
            'Fuse':{},
            'SPD':{},
            'Over/Under Voltage':{},
            'Relay':{},
            'Contactors':{}
          }
        }}
        products={[
          {
            name: 'Product 1',
            href: '/products/solar/product-1',
            imgUrl: '/solar-panal/longi/longi.jpeg',
            tags: ['Battery', 'brand X', 'gel battery']
          },
          {
            name: 'Product 2',
            href: '/products/solar/product-2',
            imgUrl: '/solar-panal/trina/trina.jpeg',
            tags: ['battery', 'brand Y', 'gel battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-3',
            imgUrl: '/solar-panal/ja/ja.jpeg',
            tags: ['battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['Battery', 'brand X', 'lithium battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'Gel', 'lithium battery']
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
