import { MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  AddressFormHeader,
  Form,
  InputsWrapper,
} from './styles'
import { Input } from '../Input'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <AddressFormHeader>
        <MapPinLine weight="regular" size={22} />
        <div>
          <h5>Endereço de Entrega</h5>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressFormHeader>
      <Form>
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Rua" />
        <InputsWrapper>
          <Input type="text" placeholder="Número" />
          <Input type="text" placeholder="Complemento" optional />
        </InputsWrapper>
        <InputsWrapper>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </InputsWrapper>
      </Form>
    </AddressFormContainer>
  )
}
