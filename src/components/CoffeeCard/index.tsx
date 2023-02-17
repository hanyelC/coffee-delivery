import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expresso from '../../assets/Expresso.png'
import {
  Buy,
  BuyActions,
  CartButton,
  CoffeeCardContainer,
  Price,
  Counter,
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
          <Counter>
            <button>
              <Minus weight="bold" size={14} />
            </button>
            <div>1</div>
            <button>
              <Plus weight="bold" size={14} />
            </button>
          </Counter>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </BuyActions>
      </Buy>
    </CoffeeCardContainer>
  )
}
