import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../utils/formatMoney'
import { Counter } from '../Counter'
import {
  Buy,
  BuyActions,
  CartButton,
  CoffeeCardContainer,
  Price,
  Tag,
  Tags,
} from './styles'

interface CoffeeCardProps {
  coffee: {
    description: string
    id: string
    imageUrl: string
    name: string
    price: number
    qty: number
    tags: string[]
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { currencySymbol, formattedValue } = formatMoney(coffee.price)

  return (
    <CoffeeCardContainer>
      <div>
        <img src={coffee.imageUrl} alt="" />
      </div>
      <Tags>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <Buy>
        <Price>
          {currencySymbol} <strong>{formattedValue}</strong>
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
