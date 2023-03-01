import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import { Logo } from '../Logo'
import { Address, Checkout, HeaderContainer } from './styles'

export function Header() {
  const { coffees } = useCartContext()

  const totalOfItems = coffees.length

  console.log(totalOfItems)

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <nav>
          <Address>
            <MapPin weight="fill" size={22} /> Porto Alegre, RS
          </Address>
          <NavLink to="/checkout">
            <Checkout totalOfItems={totalOfItems}>
              <ShoppingCart weight="fill" size={22} />
            </Checkout>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
