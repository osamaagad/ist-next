import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2 className="productPageTitle">Education</h2>

      <ProductList
        tagItems={{
          'Interactive Display': {},
          'Interactive Whiteboard': {},
          'Projectors': {},
        }}
        products={[
          {
            name: 'Specktron',
            href: '/products/education/interactive-display/specktron',
            imgUrl: '/education-product/interactive-display/specktron/specktron.jpg',
            tags: ['Interactive Display']
          },
          {
              name: 'Newline',
              href: '/products/education/interactive-display/newline',
              imgUrl: '/education-product/interactive-display/newline/newline.jpg',
              tags: ['battery', 'brand X', 'lithium battery']
            },
          {
            name: 'I-Board',
            href: '/products/education/interactive-whiteboard/i-board',
            imgUrl: '/education-product/interactive-whiteboard/i-board/i-board.jpg',
            tags: ['Interactive Whiteboard']
          },
          {
            name: 'Epson',
            href: '/products/education/projectors/epson',
            imgUrl: '/education-product/projectors/epson/epson1.jpeg',
            tags: ['Projectors']
          },
          {
            name: 'In Focus',
            href: '/products/education/projectors/in-focus',
            imgUrl: '/education-product/projectors/in-focus/in-focus.png',
            tags: ['Projectors']
          },
          {
            name: 'View Sonic',
            href: '/products/education/projectors/view-sonic',
            imgUrl: '/education-product/projectors/view-sonic/view-sonic.png',
            tags: ['Projectors']
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
