import Link from "next/link";
import { getCollections } from "@/services/shopify/collections";

export const runtime = "edge";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        <h2 className='py-5 text-3xl text-white'>Explore</h2>
        <div className='flex gap-4'>
          {collections.map((collection: any) => (
            <Link
              className='text-white underline'
              key={collection.id}
              href={`/store/${collection.handle}`}
            >
              {collection.title}
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </main>
  );
}
