import React from 'react'

export default function NewsLetterBox() {
    const onSubmitHandler = (e) => {

    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>Don't miss out: Subscribe & secure 20% off.</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
                <input type='email' placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none ' required />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
            </form>
        </div>
    )
}
