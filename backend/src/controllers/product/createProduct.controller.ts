import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/create-product/createProduct.services';

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, banner, category_id } = req.body;

    if (!name || !price || !description || !banner || !category_id)
      throw new Error('Preencha todos os campos');

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return res.json(product);
  }
}
