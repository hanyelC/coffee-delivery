import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCartContext } from '../../contexts/CartContext'
import { Coffee } from '../../reducers/cart/reducer'
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
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [counter, setCounter] = useState<number>(1)
  const { dispatch } = useCartContext()

  const { currencySymbol, formattedValue } = formatMoney(coffee.price)

  const decreaseCounter = () => {
    setCounter((state) => (state > 1 ? state - 1 : state))
  }

  const increaseCounter = () => {
    setCounter((state) => (state < 99 ? state + 1 : state))
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...coffee,
        qty: counter,
      },
    })

    setCounter(1)
  }

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
          <Counter
            qty={counter}
            handleDecrease={decreaseCounter}
            handleIncrease={increaseCounter}
          />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </BuyActions>
      </Buy>
    </CoffeeCardContainer>
  )
}
