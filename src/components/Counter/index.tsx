import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  qty: number
  handleIncrease: () => void
  handleDecrease: () => void
}

export function Counter({ qty, handleDecrease, handleIncrease }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={handleDecrease}>
        <Minus weight="bold" size={14} />
      </button>
      <div>{qty}</div>
      <button onClick={handleIncrease}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
