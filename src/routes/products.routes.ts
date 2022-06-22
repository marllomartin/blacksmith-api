import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validateProduct from '../middlewares/products.middleware';

const router = Router();

const { validateName, validateAmount } = validateProduct;

const productController = new ProductController();

// Get All Products
router.get('/products', productController.getAll);

// Create Product
router.post('/products', validateName, validateAmount, productController.create);

export default router;
