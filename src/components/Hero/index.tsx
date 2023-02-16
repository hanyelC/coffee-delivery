import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroImg from '../../assets/hero.png'
import { HeroContainer, HeroWrapper, ListIcon } from './styles'

export function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <div>
          <img src={heroImg} alt="" />
        </div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <ListIcon variant="primary-dark">
                <ShoppingCart weight="fill" size={16} />
              </ListIcon>
              Compra simples e segura
            </li>
            <li>
              <ListIcon variant="text">
                <Package weight="fill" size={16} />
              </ListIcon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <ListIcon variant="primary">
                <Timer weight="fill" size={16} />
              </ListIcon>
              Entrega rápida e rastreada
            </li>
            <li>
              <ListIcon variant="secondary">
                <Coffee weight="fill" size={16} />
              </ListIcon>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
      </HeroContainer>
    </HeroWrapper>
  )
}
