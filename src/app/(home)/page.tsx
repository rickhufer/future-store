import { title } from "process";

import { Description, Hero, MainProducts } from "@/components/home";

export const metadata = {
  title: "Future Store",
  description: "The future of shopping is here.",
  keywords: "future, store, shopping",
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
