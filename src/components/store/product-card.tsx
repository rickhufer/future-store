import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <Link
      href={`/articulo/${product.handle}?id=${product.id}`}
      className='cursor-pointer text-white'
    >
      <article className='relative flex flex-col'>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading='eager'
        />
        <div className='rounded p-3 pt-0'>
          <h3>{product.title}</h3>
        </div>
        <span className='rotate-5 absolute -right-4 -top-2 inline-block w-fit transform rounded bg-red-600 p-1 text-white'>
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
}
