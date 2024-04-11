const express = require("express");
const router = new express.Router();
const Products = require("./../models/productSchema");
//get products data
router.get("/getproducts", async (req, res) => {
  try {
    const productdata = await Products.find();
    console.log(productdata);
    // what the mistake was i have sent productdata earlier using json({productdata }) so it has created object with key property product data and values but we only return array of objects not any object  that why mapping not happend
    res.status(201).json(productdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});
//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id);
    const inddata = await Products.findOne({ id });
    res.status(201).json(inddata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

module.exports = router;
