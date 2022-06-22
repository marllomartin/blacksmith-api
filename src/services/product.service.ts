import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async create(product: Product): Promise<Product> {
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}

export default ProductService;
