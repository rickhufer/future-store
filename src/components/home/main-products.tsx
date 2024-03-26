import Image from "next/image";
import { getMainProducts } from "@/services/shopify/products";

export async function MainProducts() {
  const products = await getMainProducts();

  return (
    <section>
      <h3 className='mb-6 mt-12 text-center text-3xl text-white'>
        ✨ New products released!
      </h3>
      <div className='text-1xl grid grid-cols-2 text-white'>
        {products.map((product: any) => (
          <article className='relative z-10 h-56 min-h-10' key={product.id}>
            <p className='absolute right-6 top-0 z-20 text-right'>
              {product.title}
            </p>
            <Image
              src={product.images[0].src}
              alt={product.title}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover opacity-40'
              loading='eager'
            />
          </article>
        ))}
      </div>
    </section>
  );
}
