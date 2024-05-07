import { CreateOrderData } from "../create-order/protocols"

export interface DeleteOrderServiceProps{
  order_id : string
}

export interface IDeleteOrderService{
  execute (data : DeleteOrderServiceProps) : Promise<CreateOrderData>
}