import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// Placing order using COD METHOD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = { userId, items, amount, address, paymentMethod: "COD", payment: false, date: Date.now() };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Placing order using STRIPE
const placeOrderStripe = async (req, res) => {};
//Placing order using RAZORPAY method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for admin panel
const allOrder = async (req, res) => {};
// Order data for user Frontend
const userOrders = async (req, res) => {};

// UPDATE Order status from only ADMIN panel
const updateStatus = async (req, res) => {};

export { userOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, allOrder };
