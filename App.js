const express = require("express");
const res = require("express/lib/response");
let products = require("./products");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  console.log(products);
  res.json(products);
});

app.post("/api/products", (req, res) => {
  // req.body.id = products.length + 1;
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  // res.status(201);
  res.status(201).json(newProduct);
});

app.delete("/api/products/:productId"),
  (req, res) => {
    const { productId } = req.params;
    // const productId = req.params.productId;
    const newArray = products.filter((product) => product.id !== +productId);
    products = newArray;
    res.status(204).end();
  };
//
// const foundProduct = products.find((product) => product.id === +productId);
// if (foundProduct) {
//   res.status(204).end();
// }

app.listen(8000, () => {
  console.log("yayy this app is running on 8000");
});
