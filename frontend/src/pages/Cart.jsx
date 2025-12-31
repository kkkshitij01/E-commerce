import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate, token } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* Check if cart is empty */}
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 text-lg mb-6">
            Your cart is currently empty.
          </p>
          <button
            onClick={() => navigate("/collection")}
            className="bg-black text-white py-3 px-10 active:bg-gray-700"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <>
          {/* Show items if cart has data */}
          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div
                  key={index}
                  className="cart-item-grid py-4 border-b border-t text-gray-700 items-center"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20"
                      src={productData.image[0]}
                      alt="product-img"
                    />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 mr-4 cursor-pointer sm:w-5"
                    src={assets.bin_icon}
                    alt="bin-icon"
                  />
                </div>
              );
            })}
          </div>

          {/* Cart Totals and Checkout Button */}
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <div className="w-full text-end">
                <button
                  onClick={() => {
                    if (token) {
                      navigate("/place-order");
                    } else {
                      toast.error("Please login to proceed");
                      navigate("/login");
                    }
                  }}
                  className="bg-black text-white my-8 text-sm py-3 px-8"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
