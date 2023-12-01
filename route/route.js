const router = require("express").Router();

const {getProducts,createProduct, updateItem } = require('./model');
console.log("into option route.....");

router.get("/get_items", getProducts);
router.post("/new_item", createProduct);
//router.delete("/delete-item", mongoDbTodos.deleteItem);
router.patch("/update_item",updateItem);
router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
