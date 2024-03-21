"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalError() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-4 mt-12 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent'>
        404
      </h1>
      <Image
        src='/images/404.png'
        alt='Error'
        width={300}
        height={300}
        priority={true}
      />
      <h2 className='text-white'>¡Uy parece que el enlace se escondió!</h2>
      <Link href='/store'>
        <button className='mt-6 cursor-pointer rounded-sm bg-red-300 p-2 text-xs'>
          Vamos a la tienda
        </button>
      </Link>
    </div>
  );
}
