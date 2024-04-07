import { Description, Hero } from "@/components/home";

export const runtime = "edge";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <Description />
      {children}
    </>
  );
}
