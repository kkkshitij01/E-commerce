import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// function for adding product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    // multer puts uploaded files on req.files, not req.fields
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );
    const imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    const productData = {
      name: name,
      description: description,
      category: category,
      subCategory: subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    };
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//funciton to list products
const listProduct = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.json({ success: true, product });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

//funciton to remove products
const removeProduct = async (req, res) => {
  try {
    console.log(req.body.id);
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "product removed" });
  } catch (error) {
    res.json({ success: false, message: +error.message });
  }
};

//single product ino
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
