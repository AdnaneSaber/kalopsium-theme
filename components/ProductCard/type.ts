export type ProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
};
export type ProductCardType = {
  product: ProductType;
  Button?: React.FC<{ product: ProductType }>;
};
