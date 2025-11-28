import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
export default function Product() {
    const { productId } = useParams();
    const { products, currency, cartItems, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [focusImage, setFocusImage] = useState('');
    const [size, setSize] = useState('');
    const fetchProductData = () => {
        const foundProduct = products.find(item => item._id === productId);
        if (foundProduct) {
            setProductData(foundProduct);
            setFocusImage(foundProduct.image[0]);
        }
    }
    useEffect(() => {
        fetchProductData();
    }, [productId, products]);
    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/*`````````````````````` PRODUCT DATA`````````````````` */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/*`````````````````````` PRODUCT IMAGE`````````````````` */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => { setFocusImage(item) }} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} alt="product-img" key={index} />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={focusImage} alt='focus-image' />

                    </div>
                </div>
                {/*`````````````````````` PRODUCT INFORMATION`````````````````` */}
                <div className="flex-1">
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    {/*`````````````````````` RATING`````````````````` */}
                    <div className='flex items-center mt-2 gap-1'>
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_dull_icon} alt="" className="w-3" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {
                                productData.sizes.map((item, index) => (
                                    <button onClick={() => setSize((prev) => prev == item ? '' : item)} className={`border py-2 px-4 bg-gray-100 ${size === item ? "border-orange-600 bg-gray-400 text-white" : ""}`} key={index}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={() => { addToCart(productData._id, size) }} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/*`````````````````````` RELATED PRODUCT `````````````````` */}
            <RelatedProducts category={productData.category} subCateory={productData.subCateory} />
        </div>
    ) : null;
}
