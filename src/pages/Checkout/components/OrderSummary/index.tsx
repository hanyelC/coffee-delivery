import { useCartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { OrderSummaryContainer } from './styles'

export function OrderSummary() {
  const { shippingFee, subtotal, total } = useCartContext()

  const formattedShipping = formatMoney(shippingFee).formattedValueWithSymbol
  const formattedSubtotal = formatMoney(subtotal).formattedValueWithSymbol
  const formattedTotal = formatMoney(total).formattedValueWithSymbol

  return (
    <OrderSummaryContainer>
      <div>
        <p>Total de itens</p>
        <span>{formattedSubtotal}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>{formattedShipping}</span>
      </div>
      <div>
        <p>Total</p>
        <span>{formattedTotal}</span>
      </div>
    </OrderSummaryContainer>
  )
}
