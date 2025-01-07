import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Solar Energy</h2>

      <ProductList
        tagItems={{
          'Solar Panels': {},
          'Inverter': {
            'Solar Pump': {},
            'On Grid': {},
            'Off Grid': {},
            'Industerial': {},
            'Boostar':{}
          },
          'Solar Lighting': {},
          'Off Grid System': {},
          'UPS':{},
          'Mounting System': {},
          'Cables': {
            'DC': {},
            'AC': {}
          },
          'Solar Heatting': {
            'flat plate': {},
            'evacuated tube': {}
          },
          'Tracking System': {
            'Single Axis': {},
            'Dual Axis': {}
          },
          'Pump': {
            'Submerged': {},
            'Superficial': {}
          },
          'Battery': {
            'Gel': {},
            'Lithium': {}
          },
          'Protection': {
            'MCB': {},
            'MCCB': {},
            'MC4': {},
            'Fuse': {},
            'SPD': {},
            'Over/Under Voltage': {},
            'Relay': {},
            'Contactors': {}
          }
        }}
        products={[
          // start for solar panal
          {
            name: 'JA',
            href: '/products/solar/solar-panal/ja',
            imgUrl: '/solar-panal/ja.jpeg',
            tags: ['Solar Panels']
          },
          {
            name: 'LONGI',
            href: '/products/solar/solar-panal/longi',
            imgUrl: '/solar-panal/longi.jpeg',
            tags: ['Solar Panels']
          },
          {
            name: 'TRINA',
            href: '/products/solar/solar-panal/trina',
            imgUrl: '/solar-panal/trina.jpeg',
            tags: ['Solar Panels']
          },
          // end for solar panal
          // start for Inverter
          // solar pump
          {
            name: 'FRECON',
            href: '/products/solar/Inverter/solar-pump/frecon',
            imgUrl: '/solar-pump-inverter/frecon.jpeg',
            tags: ['Inverter', 'Solar Pump']
          },
          {
            name: 'SAJ',
            href: '/products/solar/Inverter/solar-pump/saj',
            imgUrl: '/solar-pump-inverter/saj1.jpeg',
            tags: ['Inverter', 'Solar Pump']
          },
          {
            name: 'VETCHI',
            href: '/products/solar/Inverter/solar-pump/vetchi',
            imgUrl: '/solar-pump-inverter/vetch.jpeg',
            tags: ['Inverter', 'Solar Pump']
          },
          // On grid
          {
            name: 'HUAWEI',
            href: '/products/solar/Inverter/on-grid/Huawei',
            imgUrl: '/on-grid-inverter/huawei.jpeg',
            tags: ['Inverter', 'On Grid']
          },
          {
            name: 'KACO',
            href: '/products/solar/Inverter/on-grid/kaco',
            imgUrl: '/on-grid-inverter/kaco.jpeg',
            tags: ['Inverter', 'On Grid']
          },
          {
            name: 'REFUSO',
            href: '/products/solar/Inverter/on-grid/refuso',
            imgUrl: '/on-grid-inverter/refuso.jpeg',
            tags: ['Inverter', 'On Grid']
          },
          // off grid
          {
            name: 'FRECON',
            href: '/products/solar/Inverter/off-grid/frecon',
            imgUrl: '/off-grid-inverter/frecon1.jpeg',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'EASTMAN',
            href: '/products/solar/Inverter/off-grid/eastman',
            imgUrl: '/off-grid-inverter/eastman.jpeg',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'FELICITY',
            href: '/products/solar/Inverter/off-grid/felicity',
            imgUrl: '/off-grid-inverter/felicity1.jpeg',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'MUST',
            href: '/products/solar/Inverter/off-grid/must',
            imgUrl: '/must/must.jpg',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'SAKO',
            href: '/products/solar/Inverter/off-grid/sako',
            imgUrl: '/sako/sako.webp',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'VETCHI',
            href: '/products/solar/Inverter/off-grid/vetchi',
            imgUrl: '/vetchi/vetchi.jpg',
            tags: ['Inverter', 'Off Grid']
          },
          {
            name: 'SAJ',
            href: '/products/solar/Inverter/off-grid/saj',
            imgUrl: '/saj/saj2.png',
            tags: ['Inverter', 'Off Grid']
          },
          // End for Inverter
          // start for off-grid system
          {
            name: 'POWER CAN',
            href: '/products/solar/Off-grid-system/power-can',
            imgUrl: '/power-can/power-can2.jpeg',
            tags: ['Off Grid System']
          },
          {
            name: 'SMART POWER',
            href: '/products/solar/Off-grid-system/smart-pawer',
            imgUrl: '/smart-pawer/smart-pawer1.jpeg',
            tags: ['Off Grid System']
          },
          {
            name: 'SMART POWER HOUSE',
            href: '/products/solar/Off-grid-system/Smart-Power-House',
            imgUrl: '/Smart-Power-House/Smart-Power-House.jpeg',
            tags: ['Off Grid System']
          },
          {
            name: 'CUSTOM OFF-GRID SYSTEM',
            href: '/products/solar/Off-grid-system/Custom-off-grid-system',
            imgUrl: '/prot1.png',
            tags: ['Off Grid System']
          },
          // end for Off-grid system
          // start for solar lighting
          {
            name: 'BLUE SKY',
            href: '/products/solar/solar-lighting/Blue-Sky',
            imgUrl: '/Blue-Sky/blue-sky.jpeg',
            tags: ['Solar Lighting']
          },
          {
            name: 'CAILLING LIGHT',
            href: '/products/solar/solar-lighting/Ceiling',
            imgUrl: '/Ceiling/Ceiling1.jpeg',
            tags: ['Solar Lighting']
          },
          {
            name: 'CROSSBOW',
            href: '/products/solar/solar-lighting/Crossbow',
            imgUrl: '/Crossbow/crossbow1.jpeg',
            tags: ['Solar Lighting']
          },
          {
            name: 'KING LIGHT',
            href: '/products/solar/solar-lighting/King-light',
            imgUrl: '/King-light/king-light2.jpeg',
            tags: ['Solar Lighting']
          },
          {
            name: 'WAWA',
            href: '/products/solar/solar-lighting/WAWA',
            imgUrl: '/WAWA/wawa1.jpeg',
            tags: ['Solar Lighting']
          },
          {
            name: 'TT',
            href: '/products/solar/solar-lighting/TT',
            imgUrl: '/TT/tt1.jpeg',
            tags: ['Solar Lighting']
          },
          // end for solar lighting
          // start for UPS
          {
            name: 'CUSTOM UPS',
            href: '/products/solar/UPS',
            imgUrl: '/UPS/UPS.jpg',
            tags: ['UPS']
          },
          // end for UPS
          //start for pump
            //Submerged
          {
            name: 'KPS',
            href: '/products/solar/pump/Submerged/KPS',
            imgUrl: '/KSP/kps.jpg',
            tags: ['Pump', 'Submerged']
          },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
          // {
          //   name: 'Product 3adsfasdf',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
        ]}
      />
    </div>
  );
}
