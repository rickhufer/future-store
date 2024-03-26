import Image from "next/image";

import { ProductViewItemsOrder } from "./product-view-items-order";

export function ProductView({ product }: { product: ProductType }) {
  return (
    <main className='mx-auto my-0 mt-20 grid max-w-6xl grid-cols-[1fr,450px] gap-20'>
      <section className='justify-self-end'>
        <Image
          loading='eager'
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className='rounded-lg'
        />
      </section>
      <section className='flex flex-col text-white'>
        <h1 className='mb-2 mt-0 text-3xl font-bold'>{product.title}</h1>
        <p className='mb-0  mt-4 w-fit rounded-2xl border-2 border-purple-500 px-4 py-2 text-lg leading-relaxed tracking-wider'>
          {product.tags}
        </p>
        <p className='mx-0 my-4 text-3xl tracking-wider'>
          {product.description}
        </p>
        <span className='text-3xl font-bold text-slate-500'>
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  );
}
