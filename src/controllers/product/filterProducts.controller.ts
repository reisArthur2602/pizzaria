import { Request, Response } from 'express';
import { FilterProductService } from '../../services/product/filter-Product/filterProduct.services';

export class FilterProductController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const filterProductsService = new FilterProductService();
    const products = await filterProductsService.execute({category_id});
    return res.json(products);
  }
}
