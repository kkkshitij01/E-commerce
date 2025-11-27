import React from "react"
import { createContext, useContext } from "react";
import { products } from "../assets/assets.js"

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const currency = "₹"
    const delivery_fee = 80
    const value = {
        products, currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
