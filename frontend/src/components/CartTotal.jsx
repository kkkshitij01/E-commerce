import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

export default function CartTotal() {
  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const shipping = subtotal === 0 ? 0 : delivery_fee;
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col text-sm gap-2 mt-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {subtotal}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {shipping}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {total}.00
          </b>
        </div>
      </div>
    </div>
  );
}
