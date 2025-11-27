import React, { useState } from "react"
import { createContext, useContext } from "react";
import { products } from "../assets/assets.js"

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {

    const currency = "₹"
    const delivery_fee = 80
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
