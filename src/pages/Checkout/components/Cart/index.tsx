import React from 'react'
import { useCartContext } from '../../../../contexts/CartContext'
import { Coffee } from '../../../../reducers/cart/reducer'
import { CartItem } from '../CartItem'
import { OrderSummary } from '../OrderSummary'
import { CartContainer, Divider, Items } from './styles'

interface CartProps {
  handleConfirmOrder: () => void
}

export function Cart({ handleConfirmOrder }: CartProps) {
  const { coffees, dispatch } = useCartContext()

  const addOne = (coffee: Coffee) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...coffee,
        qty: 1,
      },
    })
  }

  const removeOne = (coffeeId: string) => {
    dispatch({
      type: 'REMOVE_QTY',
      payload: {
        coffeeId,
        qty: 1,
      },
    })
  }
  const removeItemFromCart = (coffeeId: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { coffeeId },
    })
  }

  return (
    <CartContainer>
      <Items>
        {coffees.map((coffee) => (
          <React.Fragment key={coffee.id}>
            <CartItem
              coffee={coffee}
              qty={coffee.qty}
              price={coffee.price * coffee.qty}
              handleAddOneQty={() => addOne(coffee)}
              handleRemoveFromCart={() => removeItemFromCart(coffee.id)}
              handleRemoveOneQty={() => removeOne(coffee.id)}
            />
            <Divider />
          </React.Fragment>
        ))}
      </Items>
      <OrderSummary />
      <button type="button" onClick={handleConfirmOrder}>
        CONFIRMAR PEDIDO
      </button>
    </CartContainer>
  )
}
