import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./productData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="grid grid-cols-3 gap-10">
      {
      products.map((productData) => (
        <Product key={productData.product_id} productData={productData}></Product>
      ))
      }
    </section>
  );
};

export default Products;
