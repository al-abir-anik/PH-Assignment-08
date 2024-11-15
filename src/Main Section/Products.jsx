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
    <section className="w-3/4">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {filteredProducts.map((productData) => (
            <Product
              key={productData.product_id}
              productData={productData}
            ></Product>
          ))}
        </div>
      ) : (
        <h3 className="w-full font-semibold text-7xl text-[#9538e2] mt-20 flex justify-center">
          No Data Found
        </h3>
      )}
    </section>
  );
};

export default Products;
