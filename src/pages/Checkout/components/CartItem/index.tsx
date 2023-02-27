import { Minus, Plus, Trash } from 'phosphor-react'
import expresso from '../../../../assets/Expresso.png'
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
  price: number
}

export function CartItem({ price }: CartItemProps) {
  const formattedPrice = formatMoney(price).formattedValueWithSymbol

  return (
    <CartItemContainer>
      <Info>
        <img src={expresso} alt="" />
        <Details>
          <span>Expresso Tradicional</span>
          <Actions>
            <Counter>
              <button type="button">
                <Minus weight="bold" size={14} />
              </button>
              <div>1</div>
              <button type="button">
                <Plus weight="bold" size={14} />
              </button>
            </Counter>
            <RemoveButton type="button">
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
