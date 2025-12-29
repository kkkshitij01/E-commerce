import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";
//////////////////////////////////////////
export default function Orders({ token }) {
  const [orders, setOrders] = useState([]);
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + "/api/order/status", { orderId, status: event.target.value }, { headers: { token } });
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Status Updated");
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + "/api/order/list", {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
      <h3>Order Page</h3>
      {/* Removed empty className */}
      <div>
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-sm text-gray-700" key={index}>
            {/* FIXED: items-start, text-gray-700, removed redundant sm:text-sm */}

            <img className="w-12" src={assets.parcel_icon} alt="img" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  // Simplified logic: The JSX is identical in both if/else branches
                  return (
                    <p className="py-0.5" key={index}>
                      {item.name} X {item.quantity}
                      <span> {item.size}</span>
                    </p>
                  );
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName}</p>
              <div>
                <p>{order.address.street + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Items : {order.items.length}</p>
              <p className="mt-3">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? "Done" : "Pending"}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="p-2 font-semibold">
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
