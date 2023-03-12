const productController = require('../Controller/product.controller');
const router = require('express').Router();

router.post("/add", productController.add);
router.get("/:id", productController.read);
router.delete("/:id", productController.deleteProduct);
router.put("/update", productController.update);

module.exports = router;