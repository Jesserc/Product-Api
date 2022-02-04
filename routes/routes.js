const express = require("express");
const Products = require("../models/products");
const router = express.Router();
const mongoose = require("mongoose");

router.use(express.json());

//using get request to database
router.get("/products", async (req, res) => {
  const product = await Products.find();

  res.status(200).json(product);
});

//using post request to database

router.post("/products", async (req, res) => {
  const { productName, description, price, instock } = req.body;

  const newProduct = new Products({ productName, description, price, instock });
  await newProduct.save();
  return res.status(200).json(newProduct);
});

//find by Id

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product)
      return res.status(404).json({ msg: "This product does not exist." });

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});



router.put("/products/:id", async (req, res) => {
  const { productName, description, price, instock } = req.body;

  const product = await Products.findByIdAndUpdate(req.params.id, {
    productName,
    description,
    price,
    instock,
  });
 

  if (!product) {
    return res.status(404).json({ msg: "This product does not exist" });
  }

  return res.status(200).json({ msg: "updated successfully" });
});


router.delete("/products/:id", async (req, res) => {
    const product = await Products.findByIdAndDelete(req.params.id)

    if (!product) {
        return res.status(404).json({msg: "This  Product does not exist"})
    }

        return res.status(200).json({msg: "Deleted Successfully"})
}) 

module.exports = router;
