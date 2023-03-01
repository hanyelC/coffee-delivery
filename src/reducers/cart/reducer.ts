import { produce } from 'immer'
import { CartAction, CartActionTypes } from './actions'

type Tag = 'ALCOÓLICO' | 'COM LEITE' | 'ESPECIAL' | 'GELADO' | 'TRADICIONAL'

export interface Coffee {
  description: string
  id: string
  imageUrl: string
  name: string
  price: number
  qty: number
  tags: Tag[]
}

interface CartState {
  coffees: Coffee[]
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const coffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.id,
        )

        if (coffee) {
          coffee.qty += action.payload.qty
        } else {
          draft.coffees.push(action.payload)
        }
      })

    case CartActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.coffees = []
      })

    case CartActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        )
      })

    case CartActionTypes.REMOVE_QTY:
      return produce(state, (draft) => {
        const coffee = draft.coffees.find(
          (coffee) => coffee.id === action.payload.coffeeId,
        )

        if (coffee) {
          coffee.qty -= action.payload.qty

          if (coffee.qty <= 0)
            draft.coffees = draft.coffees.filter(
              (coffee) => coffee.id !== action.payload.coffeeId,
            )
        }
      })

    default:
      return state
  }
}
