// "use client";

import { useParams, useSearchParams } from "next/navigation";
import { getProducts } from "@/services/shopify/products";

import { ProductView } from "@/components/product/product-view";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const products = await getProducts(id);

  const product = products[0];
  console.log(product);

  return <ProductView product={product} />;
}
