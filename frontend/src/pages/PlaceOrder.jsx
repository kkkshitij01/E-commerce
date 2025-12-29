import React, { useContext, useState } from "react";
import Title from "../components/Title";
import axios from "axios";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

export default function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const { navigate, token, cartItems, backendUrl, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id == items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      switch (method) {
        //API CALLS FOR COD
        case "cod":
          const response = await axios.post(backendUrl + "/api/order/place", orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            toast.success("ORDER SUCCESSFULL");
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/*__________________ LEFT SIDE______________ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="gap-3 flex">
          <input onChange={onChangeHandler} name="firstName" value={formData.firstName} className="userData-input " type="text" placeholder="First Name" />
          <input onChange={onChangeHandler} name="lastName" value={formData.lastName} className="userData-input " type="text" placeholder="Last Name" />
        </div>
        <input onChange={onChangeHandler} value={formData.email} name="email" className="userData-input " type="email" placeholder="Email Address" />
        <input onChange={onChangeHandler} name="street" value={formData.street} className="userData-input " type="text" placeholder="Street" />
        <div className="gap-3 flex">
          <input onChange={onChangeHandler} name="city" value={formData.city} className="userData-input " type="text" placeholder="City" />
          <input onChange={onChangeHandler} name="state" value={formData.state} className="userData-input " type="text" placeholder="State" />
        </div>
        <div className="gap-3 flex">
          <input onChange={onChangeHandler} value={formData.zipcode} name="zipcode" className="userData-input " type="number" placeholder="Zipcode" />
          <input onChange={onChangeHandler} name="country" value={formData.country} className="userData-input " type="text" placeholder="Country" />
        </div>
        <input onChange={onChangeHandler} value={formData.phone} name="phone" className="userData-input " type="number" placeholder="Phone Number" />
      </div>
      {/*__________________ RIGHT SIDE______________ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/*__________________ PAYMENT METHOD SELECTION______________ */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div className="flex items-center border p-2 px-3 cursor-pointer">
              <p
                onClick={() => {
                  setMethod("stripe");
                }}
                className={`min-w-3 h-3 border rounded-full ${method === "stripe" ? "bg-green-300" : ""}`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe-logo" className="h-5 mx-4" />
            </div>
            <div className="flex items-center border p-2 px-3 cursor-pointer">
              <p
                onClick={() => {
                  setMethod("razorpay");
                }}
                className={`min-w-3 h-3 border rounded-full ${method === "razorpay" ? "bg-green-300" : ""}`}
              ></p>
              <img src={assets.razorpay_logo} alt="razorpay-logo" className="h-5 mx-4" />
            </div>
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                onClick={() => {
                  setMethod("cod");
                }}
                className={`min-w-3 h-3 border rounded-full ${method === "cod" ? "bg-green-300" : ""}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full mt-8 text-end">
            <button className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
}
