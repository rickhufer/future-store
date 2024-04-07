import { LogoutButton } from "@/components/shared";

interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersInfo: React.ReactNode;
  userInfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
  return (
    <div className='mx-auto my-0 max-w-5xl p-6 text-white'>
      {props.children}
      <main className='mb-12 grid grid-cols-2 gap-6'>
        {props.userInfo}
        {props.ordersInfo}
      </main>
      <LogoutButton />
    </div>
  );
}
