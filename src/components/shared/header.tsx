import Link from "next/link";
import { validateAccessToken } from "@/utils/auth/validate-access-token";

export async function Header() {
  const customer = await validateAccessToken();

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
        {customer?.firstName ? (
          <p className='text-white'>Hola {customer.firstName}</p>
        ) : (
          <Link href='/login'>Login</Link>
        )}
      </nav>
    </header>
  );
}
