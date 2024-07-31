// controllers/productController.js
const Product = require('../models/product'); //..เพื่อไปหน้าอื่น

// getProducts -- ดึงข้อมูลทั้งหมดมา
exports.getProduct= async (req, res) => { //getProduct คือชื่อฟังก์ชั่น สามารถเขียนแบบนี้ได้เลย
    try { 
        //เรียก model Products
        const products = await Product.find();
        res.status(200).json({products}); //ถ้าข้อมูลถูกต้องให้แจ้ง 200
        res.json(products);
    } catch (err) {
        //ถ้าหาข้อมูลไม่เจอให้แจ้ง error 500
        res.status(500).json({ message: err.message });
    }
};
