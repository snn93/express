exports.fetchProducts = (req, res) => {
  res.json(products);
};

exports.postProducts = (req, res) => {
  // req.body.id = products.length + 1;
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.status(201).json(newProduct);
};
exports.deleteProducts = (req, res) => {
  const { productId } = req.params;
  // const productId = req.params.productId;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    const newArray = products.filter((product) => product.id !== +productId);
    products = newArray;
  } else {
    res.status(204).end();
  }
};

module.exports = controllers;
