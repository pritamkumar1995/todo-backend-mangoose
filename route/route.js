const router = require("express").Router();

const {getProducts,createProduct, updateItem, delete_Item } = require('../controllers/operation');

router.get("/get_items", getProducts);


router.post("/new_item", createProduct);


router.delete("/delete_item", delete_Item);


router.patch("/update_item",updateItem);


router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
