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
router.get('/category', isAuthenticated , new ListCategoryController().handle)

// product
router.post('/product', isAuthenticated , new CreateProductController().handle)
router.get('/category/product',  isAuthenticated ,new FilterProductController().handle)

// order
router.post('/order', isAuthenticated ,new CreateOrderController().handle)
router.get('/order', isAuthenticated , isAuthenticated ,new ListOrderController().handle)
router.delete('/order', isAuthenticated , isAuthenticated ,new DeleteOrderController().handle)

router.put('/order/send', isAuthenticated ,new SendOrderController().handle)
router.put('/order/finish', isAuthenticated , new FinishOrderController().handle)
router.post('/order/item', isAuthenticated ,new CreateitemController().handle)
router.delete('/order/item', isAuthenticated ,new DeleteItemController().handle)

router.get('/order/item', isAuthenticated ,new DetailsItemController().handle)
