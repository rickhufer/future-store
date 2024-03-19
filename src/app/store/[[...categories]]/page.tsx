interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: { [key: string]: string };
}

export default function page(props: CategoryProps) {
  console.log(props);

  return (
    <div>
      <h1>Categoria dinámica: {props.params.categories}</h1>
    </div>
  );
}
