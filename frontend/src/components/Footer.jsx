import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/shopContext";
import { Link } from 'react-router-dom'

export default function Footer() {
  const { adminUrl } = useContext(ShopContext);
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className=" w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-black mb-3">
            Timeless style, reborn.
          </p>
          <p className="w-full md:w-2/3 text-gray-600">
            We offer bold, quality clothing designed to inspire confidence and
            self-expression. Rise from the ashes and define your destiny.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            <li>+91-9898989898</li>
            <li>contact@phoenix.com</li>
          </ul>
          <Link to={adminUrl} target="">
            <button className="bg-red-500 w-50px border text-white text-sm px-4 py-2 font-bold mt-2 w-6/12 hover:bg-red-600 hover:text-white ">
              ADMIN
            </button>
          </Link>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@phoenix.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
}
