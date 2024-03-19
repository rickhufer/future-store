"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,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";

export default function Description() {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const clasesBoton = clsx("rounded-xl bg-transparent", {
    "border-2 border-solid border-red-400": !hasBorder,
    "border-none": hasBorder,
  });

  return (
    <section className='m-auto grid max-w-[700px] grid-cols-2 gap-5 text-white'>
      <button className={clasesBoton} onClick={handleClick}>
        <div className='relative h-full w-full overflow-hidden rounded-xl'>
          <Image
            className='object-cover'
            src='/images/description.jpeg'
            alt='products marketplace'
            fill={true}
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, amet
          fugiat quisquam facere blanditiis sunt, quae, asperiores expedita ipsa
          deleniti animi. Exercitationem veniam harum hic mollitia veritatis
          reprehenderit quia optio?
        </p>
      </div>
    </section>
  );
}
