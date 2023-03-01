import React, { createContext, useContext, useReducer } from 'react'
import { CartAction } from '../reducers/cart/actions'
import { cartReducer, Coffee } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: Coffee[]
  dispatch: React.Dispatch<CartAction>
  shippingFee: number
  subtotal: number
  total: number
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: React.PropsWithChildren) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
  })

  const shippingFee = 3.5

  const subtotal = cartState.coffees.reduce((prev, curr) => {
    return prev + curr.qty * curr.price
  }, 0)

  const total = subtotal + shippingFee

  const value: CartContextType = {
    coffees: cartState.coffees,
    dispatch,
    shippingFee,
    subtotal,
    total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext)
}
