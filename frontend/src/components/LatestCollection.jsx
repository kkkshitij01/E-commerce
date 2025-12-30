import React, { useContext, useState, useEffect } from "react";
import ProductItem from "../components/ProductItem.jsx";
import Title from "../components/Title.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
export default function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="category-tag-line">
          Discover the elegance of our newest collection—crafted to elevate your
          style with every piece. Find something truly unique and let your
          fashion speak for you.
        </p>
      </div>
      {/* Rendering Products */}
      <div className="products-grid">
        {latestProducts.map((product, index) => {
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
