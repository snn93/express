const express = require("express");
const router = require("./apis/products/routes");
const { fetchProducts, postProducts, deleteProduct } = require("./controllers");

router.get("/", fetchProducts);
router.post("/", postProducts);
router.delete("/:productId", deleteProduct);

module.exports = router;
