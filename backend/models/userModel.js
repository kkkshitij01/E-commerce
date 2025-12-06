import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, reqired: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
}, { minimize: false })

const userModel = mongoose.models.product || mongoose.model("User", userSchema);
export default userModel;