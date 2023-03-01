import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'
import { AddressForm } from './components/AddressForm'
import { Cart } from './components/Cart'
import { PaymentForm } from './components/PaymentForm'
import { CheckoutContainer, FormsWrapper } from './styles'

export function Checkout() {
  const navigate = useNavigate()

  const { dispatch } = useCartContext()

  const confirmOrder = () => {
    dispatch({ type: 'CLEAR_CART' })

    navigate('/success')
  }

  return (
    <CheckoutContainer id="checkout-form">
      <div>
        <h3>Complete seu pedido</h3>
        <FormsWrapper>
          <AddressForm />
          <PaymentForm />
        </FormsWrapper>
      </div>

      <div>
        <h3>Cafés selecionados</h3>
        <Cart handleConfirmOrder={confirmOrder} />
      </div>
    </CheckoutContainer>
  )
}
