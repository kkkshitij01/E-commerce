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
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];
    if (!image1 || !image2 || !image3 || !image4) {
      throw new Error("Missing one or more images from upload");
    }
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(image1, image2, image3, image4);
    res.json({ success: true, message: "It's working " });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//funciton to list products
const listProduct = async (req, res) => {};

//funciton to remove products
const removeProduct = async (req, res) => {};

//single product ino
const singleProduct = async (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
