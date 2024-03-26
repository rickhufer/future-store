// export { default as Header } from './Header';

import Link from "next/link";

export function Header() {
  return (
    <header className='m-auto max-w-5xl'>
      <nav>
        <ul className='flex justify-center gap-4 text-violet-600'>
          <Link href='/'>
            <li className='p-4'>Home</li>
          </Link>
          <Link href='/store'>
            <li className='p-4'>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
