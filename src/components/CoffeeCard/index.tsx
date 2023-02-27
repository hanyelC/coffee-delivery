import { ShoppingCart } from 'phosphor-react'
import expresso from '../../assets/Expresso.png'
import { Counter } from '../Counter'
import {
  Buy,
  BuyActions,
  CartButton,
  CoffeeCardContainer,
  Price,
  Tag,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <div>
        <img src={expresso} alt="" />
      </div>
      <div>
        <Tag>Tradicional</Tag>
      </div>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <Buy>
        <Price>
          R$ <strong>9,90</strong>
        </Price>
        <BuyActions>
          <Counter />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </BuyActions>
      </Buy>
    </CoffeeCardContainer>
  )
}
