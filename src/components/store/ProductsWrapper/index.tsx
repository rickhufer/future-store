import { ProductCard } from "@/components/store";

export default function ProductsWrapper({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div className='mt-12 grid grid-cols-[repeat(auto-fill,320px)] justify-center justify-items-center gap-x-12 gap-y-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
