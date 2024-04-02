import Link from "next/link";
import { validateAccessToken } from "@/utils/auth/validate-access-token";

import { ShoppingCart } from "./shopping-cart";

export async function Header() {
  const customer = await validateAccessToken();

  return (
    <header className='flex flex-row flex-nowrap items-center py-0 text-white'>
      <nav>
        <ul className='mx-auto my-8 flex list-none flex-row flex-nowrap justify-center gap-x-4'>
          <li>
            <Link
              className='p-2 py-2 text-xl font-normal text-white no-underline'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='p-2 py-2 text-xl font-normal text-white no-underline'
              href='/store'
            >
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className='ml-auto flex flex-row flex-nowrap items-center gap-4'>
        {customer?.firstName ? (
          <p>Hola! {customer.firstName}</p>
        ) : (
          <Link
            className='flex cursor-pointer items-center text-xl font-normal text-white no-underline'
            href='/login'
          >
            Login
          </Link>
        )}
        <ShoppingCart />
      </div>
    </header>
  );
}
