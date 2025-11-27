import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext"
import React, { useContext, useState, useEffect } from 'react'

export default function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [vissible, setVissible] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVissible(true);
        } else {
            setVissible(false);
        }
    }, [location]);
    return showSearch && vissible ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search" className="flex-1 outline-none bg-inherit text-sm" />
                <img className="w-4" src={assets.search_icon} alt="search-icon" />
            </div>
            <img src={assets.cross_icon} alt="cross-icon" className="inline w-3 cursor-pointer" onClick={() => setShowSearch(false)} />
        </div>
    ) : null;
}
