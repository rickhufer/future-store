export default function layout({ children }: { children: React.ReactNode }) {
  console.log('hola layout store');

  return (
    <main>
      <nav>Navegación de categorias</nav>
      {children}
    </main>
  );
}
