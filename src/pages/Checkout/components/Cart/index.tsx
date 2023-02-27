import React from 'react'
import { CartItem } from '../CartItem'
import { OrderSummary } from '../OrderSummary'
import { CartContainer, Divider, Items } from './styles'

interface CartProps {
  handleConfirmOrder: () => void
}

export function Cart({ handleConfirmOrder }: CartProps) {
  return (
    <CartContainer>
      <Items>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <React.Fragment key={i}>
              <CartItem price={9.9} />
              <Divider />
            </React.Fragment>
          ))}
      </Items>
      <OrderSummary shipping={3.5} subtotal={9.9} />
      <button type="button" onClick={handleConfirmOrder}>
        CONFIRMAR PEDIDO
      </button>
    </CartContainer>
  )
}
