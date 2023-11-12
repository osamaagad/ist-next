import ProductList from "@/components/ProductList";

export default function ProductListPage() {
  return (
    <div className="productListPage">
      <h2>Solar</h2>

      <ProductList
        products={[
          {
            name: 'Product 1',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'gel battery']
          },
          {
            name: 'Product 2',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand Y', 'gel battery']
          },
          {
            name: 'Product 3',
            imgUrl: '/prot1.png',
            tags: ['battery', 'brand X', 'lithium battery']
          },
        ]}
      />
    </div>
  );
}
