// "use client";

import Image from "next/image";

import { SanitizeHTML } from "../shared";
// import { useRouter } from "next/navigation";

import { ProductViewItemsOrder } from "./product-view-items-order";

export function ProductView({ product }: { product: ProductType }) {
  // const router = useRouter();

  // if (!product) {
  //   router.push("/store");
  // }

  return (
    <main className='mx-auto my-0 mt-20 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2'>
      <section className='flex justify-center overflow-hidden'>
        <Image
          loading='eager'
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className='rounded-lg object-cover'
          priority={true}
        />
      </section>
      <section className='flex flex-col text-white'>
        <h1 className='mb-2 mt-0 text-3xl font-bold'>{product.title}</h1>
        <p className='mb-0  mt-4 w-fit rounded-2xl border-2 border-purple-500 px-4 py-2 text-lg leading-relaxed tracking-wider'>
          {product.tags}
        </p>
        <SanitizeHTML
          tag='p'
          className='mx-0 my-4 text-3xl font-light tracking-wider'
        >
          {product.description}
        </SanitizeHTML>
        <span className='text-3xl font-bold text-slate-500'>
          $ {product.price}
          <i className='ml-6 text-xs'>(Quedan {product.quantity})</i>
        </span>
        <ProductViewItemsOrder
          maxQuantity={product.quantity}
          product={product}
        />
      </section>
    </main>
  );
}
