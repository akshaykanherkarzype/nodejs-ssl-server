const productController = require("../Controllers/productController.js");
const router = require("express").Router();

router.get("/allProduct", productController.getAllProducts);
router.post("/addProduct", productController.addProduct);
router.get("/published", productController.getPublishProduct);

router.get("/:id", productController.getOneProduct);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
