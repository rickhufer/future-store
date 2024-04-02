import { ProductCard } from "./product-card";

export function ProductsWrapper({ products }: { products: ProductType[] }) {
  return (
    <div className='mt-12 grid grid-cols-2 justify-between gap-x-12 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
