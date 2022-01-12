const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//create product
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get product with id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json("Product not found.");

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete product
router.delete("/:id", async (req, res) => {
  try {
    const productExist = await Product.findById(req.params.id);
    if (!productExist) return res.status(404).json("Product not found.");

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product
router.put("/:id", async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const productExist = await Product.findById(req.params.id);
    if (!productExist) return res.status(404).json("Product not found.");

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, image },
      {
        new: true,
      }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
