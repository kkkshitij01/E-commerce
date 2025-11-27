import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/assets';
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"

export default function Collection() {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState(['relevent']);
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCategory((prev) => [...prev, e.target.value])
        }
    }
    const applyFilter = () => {
        let productsCopy = products.slice();
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => { return category.includes(item.category) })
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => { return subCategory.includes(item.subCategory) })
        }
        setFilterProducts(productsCopy)
    }

    const sortProducts = () => {
        let fpCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyFilter();
                break;
        }
    }
    useEffect(() => {
        sortProducts();
    }, [sortType])
    useEffect(() => {
        setFilterProducts(products);
    }, []);

    useEffect(() => {
        applyFilter();
    }, [category, subCategory]);
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
                    <img src={assets.dropdown_icon} alt="drop-down-icon" className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} />
                </p>
                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className='gap-2 flex'><input type='checkbox' className='w-3' value={"Men"} onChange={toggleCategory} />Men</p>
                        <p className='gap-2 flex'><input type='checkbox' className='w-3' value={"Women"} onChange={toggleCategory} />Women</p>
                        <p className='gap-2 flex'><input type='checkbox' className='w-3' value={"Kids"} onChange={toggleCategory} />kids</p>
                    </div>
                </div>
                {/* SUBCATEGORY FILTERS */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className='gap-2 flex'><input type='checkbox' className='w-3' value={"Topwear"} onChange={toggleSubCategory} />Topwear</p>
                        <p className='gap-2 flex'> <input type='checkbox' className='w-3' value={"Bottomwear"} onChange={toggleSubCategory} />Bottomwear</p>
                        <p className='gap-2 flex'><input type='checkbox' className='w-3' value={"Winterwear"} onChange={toggleSubCategory} />Winterwear </p>
                    </div>
                </div>
            </div>
            {/* RIGHT SECTION OF PAGE */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={"COLLECTIONS"} />
                    {/* PRODUCT SORT */}
                    <select onChange={(e) => { setSortType(e.target.value) }} className='border border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by : Relevant</option>
                        <option value="low-high">Sort by : Low-High</option>
                        <option value="high-low">Sort by : High-Low</option>
                    </select>
                </div>
                {/* MAP PRODUCTS */}
                <div className='products-grid'>
                    {
                        filterProducts.map((product, index) => {
                            return <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
