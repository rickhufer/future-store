interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: {
    src: string;
  }[];
  creationAt: Date;
  updatedAt: Date;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
  gql_id: string;
};

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
};
