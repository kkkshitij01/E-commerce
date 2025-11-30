import React, { useContext } from 'react'
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"
export default function CartTotal() {
    const { getCartAmount, currency, delivery_fee } = useContext(ShopContext)
    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className="flex flex-col text-sm gap-2 mt-2">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    )
}
