"use client";

import Image from "next/image";
import { useShoppingCart } from "@/hooks";
import { FaRegTrashCan } from "react-icons/fa6";

interface ShoppingCartItemProps {
  item: CartItem;
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {
  const { removeCartItem } = useShoppingCart();

  return (
    <div className='flex flex-row flex-nowrap items-center gap-x-4'>
      <Image src={item.image} alt={item.title} width={48} height={48} />
      <div className='grid w-full grid-cols-[auto,1rem] items-center gap-x-4'>
        <p className='text-left text-xs font-bold'>{item?.title}</p>
        <span className='h-4 w-4'>x{item.quantity}</span>
      </div>
      <button
        onClick={() => removeCartItem(item)}
        className='m-0 cursor-pointer border-none bg-transparent p-0 text-right text-xs font-bold'
        aria-label='trash'
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};
