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
            'P(Re)V':{},
            'P(Ri)V':{}
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
            // star for valves
                // gate valve
          {
            name: 'FIRE GUARD',
            href: '/products/Fire/OS&Y-Gate-Valve/Fire-Guard',
            imgUrl: '/OS&Y-Gate-Valve/Fire-Guard4.jpg',
            tags: ['Valves','Gate Valve']
          },
          {
            name: 'RAPIDROP',
            href: '/products/Fire/OS&Y-Gate-Valve/Rapidrop',
            imgUrl: '/OS&Y-Gate-Valve/Rapidrop1.jpg',
            tags: ['Valves','Gate Valve']
          },
          {
            name: 'WEFLO',
            href: '/products/Fire/OS&Y-Gate-Valve/weflo',
            imgUrl: '/OS&Y-Gate-Valve/weflo1.jpg',
            tags: ['Valves','Gate Valve']
          },
                // check valve
          {
            name: 'RAPIDROP',
            href: '/products/Fire/Check-Valve/Rapidrop',
            imgUrl: '/Check-Valve/rapidrop.jpg',
            tags: ['Valves','Check Valve']
          },
          {
            name: 'FIRE GUARD',
            href: '/products/Fire/Check-Valve/Fire-Guard',
            imgUrl: '/Check-Valve/fire-guard2.jpg',
            tags: ['Valves','Check Valve']
          },
          {
            name: 'WEFLO',
            href: '/products/Fire/Check-Valve/weflo',
            imgUrl: '/Check-Valve/weflo.jpg',
            tags: ['Valves','Check Valve']
          },
                // Butterfly Valve
          {
            name: 'FIRE GUARD',
            href: '/products/Fire/Butterfly-Valve/Weflo',
            imgUrl: '/Butterfly-Valve/Fire-Guard.jpg',
            tags: ['Valves', 'Butterfly Valve']
          },
          {
            name: 'WEFLO',
            href: '/products/Fire/Butterfly-Valve/Fire-Guard',
            imgUrl: '/Butterfly-Valve/weflo1.jpg',
            tags: ['Valves', 'Butterfly Valve']
          },
                // Test&Drain Valve
          {
            name: 'FIRE GUARD',
            href: '/products/Fire/Test&Drain-Valve/Fire-Guard',
            imgUrl: '/Test&Drain-Valve/fire-guard.png',
            tags: ['Valves', 'Test&Drain Valve']
          },
          {
            name: 'RAPIDROP',
            href: '/products/Fire/Test&Drain-Valve/Rapidrop',
            imgUrl: '/Test&Drain-Valve/Rapidrop.jpg',
            tags: ['Valves', 'Test&Drain Valve']
          },
                // ACV
          {
            name: 'WEFLO',
            href: '/products/Fire/Alarm-check-Valve/Weflo',
            imgUrl: '/Alarm-check-Valve/weflo1.jpg',
            tags: ['Valves', 'ACV']
          },
          {
            name: 'RAPIDROP',
            href: '/products/Fire/Alarm-check-Valve/Rapidrop',
            imgUrl: '/Alarm-check-Valve/Rapidrop3.jpg',
            tags: ['Valves', 'ACV']
          },
          // {
          //   name: 'Product 3',
          //   href: '/products/solar/product-1',
          //   imgUrl: '/prot1.png',
          //   tags: ['battery', 'brand X', 'lithium battery']
          // },
        ]}
      />
    </div>
  );
}
