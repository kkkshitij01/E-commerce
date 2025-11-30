import React, { useState } from 'react'

export default function Login() {
    const [currentState, setCurrentState] = useState('Login');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("HAI YOU SUBMITED")
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' >
            <div className='inline-flex item-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className='border-none bg-gray-800 h-[1.5px] w-8' />
            </div>
            {currentState == "Sign Up" && <input type="text" required className='w-full px-3 py-2 border border-gray-800' placeholder='Name' />}
            <input type="email" required className='w-full px-3 py-2 border border-gray-800' placeholder='Email' />
            <input type="password" required className='w-full px-3 py-2 border border-gray-800' placeholder='Password' />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot Password?</p>
                {
                    currentState === "Login" ? <p className='cursor-pointer' onClick={() => setCurrentState("Sign up")}>Create new Account</p> :
                        <p className='cursor-pointer' onClick={() => { setCurrentState("Login") }}> Login</p>
                }
            </div>
            <button className='bg-black text-white font-light px-8 py-2 mt-4 '>{currentState === "Login" ? "Login" : "Sign Up"}</button>
        </form >
    )
}
