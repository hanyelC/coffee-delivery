import { formatMoney } from '../../../../utils/formatMoney'
import { OrderSummaryContainer } from './styles'

interface OrderSummaryProps {
  shipping: number
  subtotal: number
}

export function OrderSummary({ shipping, subtotal }: OrderSummaryProps) {
  const total = shipping + subtotal

  const formattedShipping = formatMoney(shipping).formattedValueWithSymbol
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
