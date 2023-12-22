import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

function Shop() {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await axios.get("https://fakestoreapi.com/products");
        setProducts(responsive.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-20 gap-6 py-10">
      {products.map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Shop;