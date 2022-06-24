import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderController = new OrderController();

// Get All Orders
router.get('/orders', orderController.getAll);

export default router;
