const express = require('express');
const router = express.Router();

const {getProduct} = require("../controllers/productController"); //จะองไฟล์ไหน ใส่ไปเลย

router.get("/",getProduct);
router.get("/:id",getProduct);

module.exports = router
