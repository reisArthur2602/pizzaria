import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/category/create-category/createCategory.services';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) throw new Error('o Nome da categoria é obrigatório');

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(name);

    return res.json(category);
  }
}
