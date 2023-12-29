import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Solar</h2>

      <ProductList
        tagItems={{
          'Solar Panals':{},
          'Inverter': {
            'Solar Pump':{},
            'On Grid': {},
            'Off Grid': {},
            'Industerial':{}
          },
          'Battery': {
            'Gel': {},
            'Lithium': {}
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
          // start for solar panal
          {
            name: 'JA',
            href: '/products/solar/solar-panal/ja',
            imgUrl: '/solar-panal/ja.jpeg',
            tags: ['Solar Panals']
          },
          {
            name: 'LONGI',
            href: '/products/solar/solar-panal/longi',
            imgUrl: '/solar-panal/longi.jpeg',
            tags: ['Solar Panals']
          },
          {
            name: 'TRINA',
            href: '/products/solar/solar-panal/trina',
            imgUrl: '/solar-panal/trina.jpeg',
            tags: ['Solar Panals']
          },
          // end for solar panal
          // start for Inverter
                // solar pump
          {
            name: 'FRECON',
            href: '/products/solar/Inverter/solar-pump/frecon',
            imgUrl: '/solar-pump-inverter/frecon.jpeg',
            tags: ['Inverter','Solar Pump']
          },
          {
            name: 'SAJ',
            href: '/products/solar/Inverter/solar-pump/saj',
            imgUrl: '/solar-pump-inverter/saj1.jpeg',
            tags: ['Inverter','Solar Pump']
          },
          {
            name: 'VETCHI',
            href: '/products/solar/Inverter/solar-pump/vetchi',
            imgUrl: '/solar-pump-inverter/vetch.jpeg',
            tags: ['Inverter','Solar Pump']
          },
                // On grid
          {
            name: 'HUAWEI',
            href: '/products/solar/Inverter/on-grid/Huawei',
            imgUrl: '/on-grid-inverter/huawei.jpeg',
            tags: ['Inverter','On Grid']
          },
          {
            name: 'KACO',
            href: '/products/solar/Inverter/on-grid/kaco',
            imgUrl:'/on-grid-inverter/kaco.jpeg',
            tags: ['Inverter','On Grid']
          },
          {
            name: 'REFUSO',
            href: '/products/solar/Inverter/on-grid/refuso',
            imgUrl: '/on-grid-inverter/refuso.jpeg',
            tags: ['Inverter','On Grid']
          },
                // off grid
          {
            name: 'FRECON',
            href: '/products/solar/Inverter/off-grid/frecon',
            imgUrl: '/off-grid-inverter/frecon1.jpeg',
            tags: ['Inverter','Off Grid']
          },
          {
            name: 'EASTMAN',
            href: '/products/solar/Inverter/off-grid/eastman',
            imgUrl: '/off-grid-inverter/eastman.jpeg',
            tags: ['Inverter','Off Grid']
          },
          {
            name: 'FELICITY',
            href: '/products/solar/Inverter/off-grid/felicity',
            imgUrl: '/off-grid-inverter/felicity1.jpeg',
            tags: ['Inverter','Off Grid']
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
