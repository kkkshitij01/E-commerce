import React from 'react'
import NewsLetterBox from "../components/NewsLetterBox.jsx"
import Title from "../components/Title"
import { assets } from "../assets/assets.js"
export default function Contact() {
    return (
        <div>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={"CONTACT"} text2={"US"} />
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img src={assets.contact_img} alt='contact-img' className='w-full md:max-w-[480px]' />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className='font-semibold text-xl text-gray-600'>Our Story</p>
                    <p className='text-gray-500'>DLF Cyber City<br /> Sector 15 Part 2, Gurugram, Haryana</p>
                    <p className='text-gray-500'>TEL: +91 8989898989 <br />Email: admin@phoenix.com</p>
                    <p className='text-gray-600 text-xl font-semibold'>Careers at Phoenix</p>
                    <p className='text-gray-500'>Learn more about our team and job openings</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
                </div>
            </div>
            <NewsLetterBox />
        </div>
    )
}
