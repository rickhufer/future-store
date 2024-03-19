import { Suspense } from "react";
import Image from "next/image";

import Loading from "@/app/loading";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.log(error);
  }
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: {
    src: string;
  }[];
  creationAt: Date;
  updatedAt: Date;
}

export default async function MainProducts() {
  const products = await getProducts();

  return (
    <section>
      <h3 className='mb-6 mt-12 text-center text-3xl text-white'>
        ✨ New products released!
      </h3>
      <Suspense fallback={<Loading />}>
        <div className='text-1xl grid grid-cols-2 text-white'>
          {products.map((product: Product) => (
            <article className='relative z-10 h-56 min-h-10' key={product.id}>
              <p className='absolute right-6 top-0 z-20 text-right'>
                {product.title}
              </p>
              <Image
                src={product.images[0].src}
                alt={product.title}
                fill
                className='object-cover opacity-40'
                loading='eager'
              />
            </article>
          ))}
        </div>
      </Suspense>
    </section>
  );
}
