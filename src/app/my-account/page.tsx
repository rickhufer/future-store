import { LogoutButton } from "@/components/shared";

export const runtime = "edge";

export default async function MyAccountPage() {
  return (
    <div>
      <h1 className='mb-12 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-center text-5xl font-bold tracking-wider text-transparent'>
        My Account
      </h1>
    </div>
  );
}
