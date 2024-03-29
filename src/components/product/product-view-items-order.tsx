"use client";

import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

export function ProductViewItemsOrder({
  maxQuantity,
}: {
  maxQuantity: number;
}) {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className='mt-8 grid grid-cols-[auto,1fr] gap-5'>
      <div className='flex w-fit flex-row flex-nowrap items-center gap-y-2 rounded-lg border-purple-500 bg-slate-700'>
        <button className='px-6 py-3 text-purple-500' onClick={handleSubtract}>
          -
        </button>
        <p>{counter}</p>
        <button className='px-6 py-3 text-purple-500' onClick={handleAdd}>
          +
        </button>
      </div>
      <div className='w-full'>
        <button
          onClick={handleSubmit}
          className='mt-auto flex h-12 w-full cursor-pointer flex-row flex-nowrap items-center justify-center gap-y-2 rounded-lg border-none bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-xl font-bold text-white'
          type='submit'
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
