import express from "express";
import { userOrders, placeOrder, verifyStripe, placeOrderRazorpay, placeOrderStripe, updateStatus, allOrder } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

//PAYMENT FEATURE
orderRouter.post("/place", authUser, placeOrder);
//Stripe payment
orderRouter.post("/stripe", authUser, placeOrderStripe);
//verify Stripe Payment status
orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User Features
orderRouter.post("/userOrders", authUser, userOrders);

export default orderRouter;
