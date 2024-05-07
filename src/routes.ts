import { Router } from 'express';
import { isAuthenticated } from './middlewares/isAuthenticated';

import {
  AuthUserController,
  CreateCategoryController,
  CreateOrderController,
  CreateProductController,
  CreateUserController,
  CreateitemController,
  DeleteItemController,
  DeleteOrderController,
  DetailUserController,
  DetailsItemController,
  FilterProductController,
  FinishOrderController,
  ListCategoryController,
  ListOrderController,
  SendOrderController,
} from './controllers';


export const router = Router();
// user
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// category
router.post('/category', isAuthenticated , new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)

// product
router.post('/product', isAuthenticated , new CreateProductController().handle)
router.get('/category/product' ,new FilterProductController().handle)

// order
router.post('/order',new CreateOrderController().handle)
router.get('/order', isAuthenticated , new ListOrderController().handle)
router.delete('/order', isAuthenticated , new DeleteOrderController().handle)

router.put('/order/send', new SendOrderController().handle)
router.put('/order/finish', isAuthenticated , new FinishOrderController().handle)
router.post('/order/item', new CreateitemController().handle)
router.delete('/order/item',new DeleteItemController().handle)

router.get('/order/item',new DetailsItemController().handle)
