import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';
import ProductModel from '../models/product.model';
import FullOrder from '../interfaces/fullorder.interface';

class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<FullOrder[]> {
    const orders = await this.orderModel.getAll();

    const fullOrders = await Promise.all(orders.map(async (order: Order) => {
      const productsByOrder = await this.productModel.getByOrderId(Number(order.id));

      const productsIds = productsByOrder.map((product) => product.id);

      const result = {
        id: order.id,
        userId: order.userId,
        productsIds,
      };

      return result;
    }));

    return fullOrders;
  }
}

export default OrderService;
