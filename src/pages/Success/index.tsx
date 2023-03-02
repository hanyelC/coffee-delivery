import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/illustration.svg'

import {
  GradientBorder,
  ListIcon,
  OrderDetailsItem,
  OrderDetailsList,
  SuccessContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <GradientBorder>
          <OrderDetailsList>
            <OrderDetailsItem>
              <ListIcon variant="secondary">
                <MapPin size={16} weight="fill" />
              </ListIcon>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </OrderDetailsItem>
            <OrderDetailsItem>
              <ListIcon variant="primary">
                <Timer size={16} weight="fill" />
              </ListIcon>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min </strong>{' '}
                </p>
              </div>
            </OrderDetailsItem>
            <OrderDetailsItem>
              <ListIcon variant="primary-dark">
                <CurrencyDollar size={16} weight="regular" />
              </ListIcon>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </OrderDetailsItem>
          </OrderDetailsList>
        </GradientBorder>
      </div>
      <div>
        <img src={illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
