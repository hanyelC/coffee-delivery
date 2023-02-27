import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus weight="bold" size={14} />
      </button>
      <div>1</div>
      <button>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
