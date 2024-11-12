import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  const { category } = useParams();

  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    if (!category || category === "All Products") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = [...products].filter(
        (product) => product.category === category
      );
      setFilteredProducts(filteredByCategory);
    }
  }, [products, category]);

  return (
    <section className="grid grid-cols-3 gap-10">
      {filteredProducts.map((productData) => (
        <Product
          key={productData.product_id}
          productData={productData}
        ></Product>
      ))}
    </section>
  );
};

export default Products;
