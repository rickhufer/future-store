import { env } from "@/config/env";

export const shopifyUrls = {
  products: {
    "all": `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
  },
  collections: {
    "all": `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`,
    "products": (collection_id: string) =>
      `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${collection_id}/products.json`,
  },
};
