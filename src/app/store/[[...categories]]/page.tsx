import {
  getCollectionProducts,
  getCollections,
} from "@/services/shopify/collections";
import { getProducts } from "@/services/shopify/products";

import { ProductsWrapper } from "@/components/store";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: { [key: string]: string };
}

interface Collections {
  id: number;
  title: string;
  handle: string;
}

export const runtime = "edge";

export default async function page(props: CategoryProps) {
  let products = [];

  const { categories } = props.params;
  const collections = await getCollections();

  if (categories?.length === 1) {
    const selectedCollection = collections.find(
      (collection: Collections) => collection.handle === categories[0]
    );
    products = await getCollectionProducts(selectedCollection.id);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
