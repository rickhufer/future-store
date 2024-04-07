import { revalidatePath } from "next/cache";

import { env } from "@/config/env";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;

  if (!path || !token) {
    return Response.json("Missing path or token", { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json("Invalid token", { status: 401 });
  }

  revalidatePath(path);

  return Response.json("Cache revalidated", { status: 200 });
}
