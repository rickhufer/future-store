"use client";

import Image from "next/image";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-4 mt-12 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent'>
        Ha ocurrido un error
      </h1>
      <Image src='/images/error.png' alt='Error' width={300} height={300} />
      <button
        className='mt-6 cursor-pointer rounded-sm bg-red-300 p-2 text-xs'
        onClick={reset}
      >
        Presiona para intentar de nuevo
      </button>
    </div>
  );
}
