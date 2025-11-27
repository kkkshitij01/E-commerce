import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from "../components/Title"

export default function RelatedProducts({ category, subCateory }) {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter(product => product.category === category)
            productCopy = productCopy.filter(product => product.subCateory === subCateory)
            setRelated(productCopy.slice(0, 5));
        }
    }, [products]);
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>
            <div className="products-grid">
                {
                    related.map((product, index) => {
                        return <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
                    })
                }
            </div>
        </div>
    )
}
