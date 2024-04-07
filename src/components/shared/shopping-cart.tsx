"use client";

import { useState } from "react";
import { handleCreateCart } from "@/actions";
import { useShoppingCart } from "@/hooks";
import { FaShoppingCart } from "react-icons/fa";

import { ShoppingCartItem } from "./shoping-cart-item";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen);
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if (!checkoutUrl) throw new Error("Error creating checkout");
      window.localStorage.removeItem("cart");
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  };
  return (
    <div className='relative'>
      {hasItems && (
        <span className='absolute -right-1 -top-2 z-10 flex h-5 w-5 items-center justify-center rounded-2xl bg-pink-600 p-1 text-xs font-bold'>
          {cart.length}
        </span>
      )}
      <button
        className='cursor-pointer border-none bg-transparent p-2'
        onClick={handleOpen}
      >
        <FaShoppingCart className='h-6 w-6' />
      </button>
      {isOpen && hasItems && (
        <div className='absolute right-0 z-20 flex min-w-64 flex-col flex-nowrap gap-y-2 rounded-lg border-2 border-solid border-gray-800 bg-gray-900 p-4'>
          {cart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button
            onClick={handleBuy}
            className='mt-4 w-full cursor-pointer rounded-lg border-none bg-pink-600 p-2 font-bold'
            disabled={isBuying}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
}
