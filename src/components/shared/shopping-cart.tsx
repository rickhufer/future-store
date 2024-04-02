"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function ShoppingCart() {
  const [countItems, setCountItems] = useState(0);

  return (
    <button className='relative ml-2 flex border-none bg-transparent'>
      <p className='absolute -left-4 -top-2 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-pink-500/90 text-xs'>
        {countItems}
      </p>
      <FaShoppingCart className='h-6 w-6' />
    </button>
  );
}
