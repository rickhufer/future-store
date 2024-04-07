import { validateAccessToken } from "@/utils/auth/validate-access-token";

export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div className='rounded-lg border-2 border-solid border-gray-800 p-4'>
      <section>
        <h2 className='mb-4 text-2xl'>Información personal</h2>
        <h1>Nombre: {customer?.firstName}</h1>
        <p>Email: {customer?.email}</p>
      </section>
    </div>
  );
}
