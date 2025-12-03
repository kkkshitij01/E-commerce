import mongoose from "mongoose"

export default connectToDb = async () => {
    await mongoose.connect(`${process.env.MONGODB_URL}`)
}