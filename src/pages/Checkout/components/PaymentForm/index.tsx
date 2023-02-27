import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import {
  PaymentOptions,
  PaymentFormContainer,
  PaymentFormHeader,
  PaymentOption,
} from './styles'

export function PaymentForm() {
  const [checkedPayment, setCheckedPayment] = useState<string | null>(null)

  return (
    <PaymentFormContainer>
      <PaymentFormHeader>
        <CurrencyDollar weight="regular" size={22} />
        <div>
          <h5>Pagamento</h5>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentFormHeader>
      <PaymentOptions>
        <PaymentOption isChecked={checkedPayment === 'credit'}>
          <CreditCard size={16} weight="regular" />
          <input
            type="radio"
            id="credit"
            name="payment"
            value="credit"
            onChange={(e) => setCheckedPayment(e.target.value)}
          />
          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption isChecked={checkedPayment === 'debit'}>
          <Bank size={16} weight="regular" />
          <input
            type="radio"
            id="debit"
            name="payment"
            value="debit"
            onChange={(e) => setCheckedPayment(e.target.value)}
          />
          <span>Cartão de débito</span>
        </PaymentOption>

        <PaymentOption isChecked={checkedPayment === 'money'}>
          <Money size={16} weight="regular" />
          <input
            type="radio"
            id="money"
            name="payment"
            value="money"
            onChange={(e) => setCheckedPayment(e.target.value)}
          />
          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptions>
    </PaymentFormContainer>
  )
}
