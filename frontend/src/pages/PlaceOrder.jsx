import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from "../components/CartTotal"
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';

export default function PlaceOrder() {
    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/*__________________ LEFT SIDE______________ */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"DELIVERY"} text2={"INFORMATION"} />
                </div>
                <div className="gap-3 flex">
                    <input className='userData-input ' type="text" placeholder='First Name' />
                    <input className='userData-input ' type="text" placeholder='Last Name' />
                </div>
                <input className='userData-input ' type="email" placeholder='Email Address' />
                <input className='userData-input ' type="text" placeholder='Street' />
                <div className="gap-3 flex">
                    <input className='userData-input ' type="text" placeholder='City' />
                    <input className='userData-input ' type="text" placeholder='State' />
                </div>
                <div className="gap-3 flex">
                    <input className='userData-input ' type="number" placeholder='Zipcode' />
                    <input className='userData-input ' type="text" placeholder='Country' />
                </div>
                <input className='userData-input ' type="number" placeholder='Phone Number' />
            </div>
            {/*__________________ RIGHT SIDE______________ */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <Title text1={"PAYMENT"} text2={"METHOD"} />
                    {/*__________________ PAYMENT METHOD SELECTION______________ */}
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div className='flex items-center border p-2 px-3 cursor-pointer'>
                            <p onClick={() => { setMethod('stripe') }} className={`min-w-3 h-3 border rounded-full ${method === 'stripe' ? "bg-green-300" : "**:"}`}></p>
                            <img src={assets.stripe_logo} alt="stripe-logo" className='h-5 mx-4' />
                        </div>
                        <div className='flex items-center border p-2 px-3 cursor-pointer'>
                            <p onClick={() => { setMethod('razorpay') }} className={`min-w-3 h-3 border rounded-full ${method === 'razorpay' ? "bg-green-300" : "**:"}`}></p>
                            <img src={assets.razorpay_logo} alt="razorpay-logo" className='h-5 mx-4' />
                        </div>
                        <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p onClick={() => { setMethod('cod') }} className={`min-w-3 h-3 border rounded-full ${method === 'cod' ? "bg-green-300" : "**:"}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>
                    <div className='w-full mt-8 text-end'>
                        <button onClick={() => navigate("/orders")} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
