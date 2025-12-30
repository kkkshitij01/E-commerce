import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductItem from "./ProductItem";
import Title from "../components/Title.jsx";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);
    if (bestProducts) setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="category-tag-line">
          Discover the styles that have earned their place at the top—shop our
          customer favorites and see what all the fuss is about
        </p>
      </div>
      {/* Rendering Products */}
      <div className="products-grid ">
        {bestSeller.map((product, index) => {
          return (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}
