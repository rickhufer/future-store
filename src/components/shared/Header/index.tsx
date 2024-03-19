// export { default as Header } from './Header';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-5xl m-auto">
      <nav>
        <ul className="flex gap-4 justify-center text-violet-600">
          <Link href="/">
            <li className="p-4">Home</li>
          </Link>
          <Link href="/store">
            <li className="p-4">Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
