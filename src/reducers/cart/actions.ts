import { Coffee } from './reducer'

export const CartActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_QTY: 'REMOVE_QTY',
  REMOVE_ITEM: 'REMOVE_ITEM',
} as const

type AddItemAction = {
  type: typeof CartActionTypes.ADD_ITEM
  payload: Coffee
}

type ClearCartAction = {
  type: typeof CartActionTypes.CLEAR_CART
}

type RemoveItemAction = {
  type: typeof CartActionTypes.REMOVE_ITEM
  payload: {
    coffeeId: string
  }
}

type RemoveQtyAction = {
  type: typeof CartActionTypes.REMOVE_QTY
  payload: {
    coffeeId: string
    qty: number
  }
}

export type CartAction =
  | AddItemAction
  | ClearCartAction
  | RemoveItemAction
  | RemoveQtyAction
