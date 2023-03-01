import { Minus, Plus, Trash } from 'phosphor-react'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  Actions,
  CartItemContainer,
  Counter,
  Details,
  Info,
  Price,
  RemoveButton,
} from './styles'

interface CartItemProps {
  coffee: {
    imageUrl: string
    name: string
  }
  qty: number
  price: number
  handleAddOneQty: () => void
  handleRemoveFromCart: () => void
  handleRemoveOneQty: () => void
}

export function CartItem({
  coffee,
  qty,
  price,
  handleAddOneQty,
  handleRemoveFromCart,
  handleRemoveOneQty,
}: CartItemProps) {
  const formattedPrice = formatMoney(price).formattedValueWithSymbol

  return (
    <CartItemContainer>
      <Info>
        <img src={coffee.imageUrl} alt="" />
        <Details>
          <span>{coffee.name}</span>
          <Actions>
            <Counter>
              <button type="button" onClick={handleRemoveOneQty}>
                <Minus weight="bold" size={14} />
              </button>
              <div>{qty}</div>
              <button type="button" onClick={handleAddOneQty}>
                <Plus weight="bold" size={14} />
              </button>
            </Counter>
            <RemoveButton type="button" onClick={handleRemoveFromCart}>
              <Trash size={16} weight="regular" />
              REMOVER
            </RemoveButton>
          </Actions>
        </Details>
      </Info>
      <Price>{formattedPrice}</Price>
    </CartItemContainer>
  )
}
