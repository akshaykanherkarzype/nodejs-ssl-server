const db = require("../Models");

//Create Main Model
const Product = db.products;
const Review = db.reviews;

//Main Work

// 1. Create Product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  if (!info.title || !info.price || !info.description || !info.published) {
    return res.status(400).send("Invalid Data");
  }

  try {
    const product = await Product.create(info);
    return res.status(200).send(product);
    // console.log("product:", product);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// 2. Get All Products
const getAllProducts = async (req, res) => {
  try {
    let products = await Product.findAll({});
    res.status(200).send(products);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// 3. Get Single Product
const getOneProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// 4. UpdateProduct
const updateProduct = async (req, res) => {
  let { id } = req.params;
  try {
    let product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// 5. Delete Product
const deleteProduct = async (req, res) => {
  let { id } = req.params;
  try {
    await Product.destroy({ where: { id: id } });
    res.status(200).send("product is successfully deleted");
  } catch (err) {
    return res.status(400).send(err);
  }
};

// 6. Get Published Product
const getPublishProduct = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { published: true } });
    res.status(200).send(products);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishProduct,
};
