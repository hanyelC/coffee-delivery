import { CoffeeCard } from '../../components/CoffeeCard'
import { Hero } from '../../components/Hero'
import { coffees } from '../../utils/coffeeList'
import {
  CoffeeList,
  CoffeeListHeader,
  Filters,
  HomeContainer,
  Tag,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <main>
        <CoffeeListHeader>
          <h2>Nossos cafés</h2>
          <Filters>
            <Tag>Tradicional</Tag>
            <Tag>especial</Tag>
            <Tag>com leite</Tag>
            <Tag>alcoólico</Tag>
            <Tag>gelado</Tag>
          </Filters>
        </CoffeeListHeader>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </main>
    </HomeContainer>
  )
}
