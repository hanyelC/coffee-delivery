import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../Logo'
import { Address, Checkout, HeaderContainer } from './styles'

export function Header() {
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
            <Checkout>
              <ShoppingCart weight="fill" size={22} />
            </Checkout>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
