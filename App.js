const express = require("express");
const app = express();
const productRoutes = require("./apis/products/routes");
// const PORT = 8000;
// const connectDB = require("./db/database");

app.use(express.json());
app.use("/api/products", productRoutes);

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
// });

// app.use((err, req, res, next));
// connectDB();

app.listen(8000, () => {
  console.log("yayy this app is running on 8000");
});
