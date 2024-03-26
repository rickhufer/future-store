import { revalidateTag } from "next/cache";

import { env } from "@/config/env";

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!tag || !token) {
    return Response.json("Missing tag or token", { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json("Invalid token", { status: 401 });
  }

  revalidateTag(tag);

  return Response.json("Cache revalidated", { status: 200 });
}
