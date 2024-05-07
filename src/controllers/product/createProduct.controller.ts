import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/create-product/createProduct.services';
import { CreateProductsProps } from '../../services/product/create-product/protocols';

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } =
      req.body as CreateProductsProps;

    if (!name || !price || !description || !category_id)
      throw new Error('Preencha todos os campos');

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      description,
      category_id,
    });

    return res.json(product);
  }
}
