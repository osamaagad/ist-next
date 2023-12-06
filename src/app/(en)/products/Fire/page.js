import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Fire Systems</h2>

      <ProductList
        tagItems={{
          'Fire Pumps': {},
          'Sprinklers': {
            'Upright': {},
            'Pandent': {},
          },
          'Fire Hose':{
            'Single':{},
            'Dubel':{},
          },
          'Valves':{
            'Gate Valve':{},
            'Check Valve':{},
            'Butterfly Valve':{},
            'Test&Drain Valve':{},
            'ACV':{},
            'Air Vent':{},
            'Flow Metar Valve':{},
            'PRV':{}
          },
          'Gas System':{
            'Aerosol':{},
            'Fm200':{},
            'CO2':{}
          },
          'Portable Chemical Powder':{},
          'Portable CO2 Fire Extinguisher':{},
          'Siamese Connection':{},
          'Pipes':{
            'Seamless Pipes':{},
            'ERW Pipes':{}
          }
        }}
        products={[
          {
            name: 'Product 1',
            href: '/products/solar/product-1',
            imgUrl: '/prot1.png',
            tags: ['Battery', 'brand X', 'gel battery']
          },
          {
            name: 'Product 2',
            href: '/products/solar/product-2',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand Y', 'gel battery']
          },
          {
            name: 'Product 3',
            href: '/products/solar/product-3',
            imgUrl: '/prot1.png',
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
