import { Description, Hero } from "@/components/home";

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
