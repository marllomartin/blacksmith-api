import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

// Get All Products
router.get('/products', productController.getAll);

export default router;
