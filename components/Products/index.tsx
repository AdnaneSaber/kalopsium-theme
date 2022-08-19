import { useState, useEffect } from "react";
import { ProductCard } from "components";
import axios from "axios";
const Products: React.FC = () => {
  const [prods, setProds] = useState([]);
  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products/list");
    setProds(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid md:grid-cols-2 w-full sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
      {prods.map((e, i) => (
        <ProductCard product={e} key={i} />
      ))}
    </div>
  );
};
export default Products;
