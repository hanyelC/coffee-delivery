import americano from '../assets/Americano.png'
import arabe from '../assets/Arabe.png'
import cafeGelado from '../assets/Cafe_Gelado.png'
import cafeComLeite from '../assets/Cafe_com_Leite.png'
import capuccino from '../assets/Capuccino.png'
import chocolateQuente from '../assets/Chocolate_Quente.png'
import cubano from '../assets/Cubano.png'
import expresso from '../assets/Expresso.png'
import expressoCremoso from '../assets/Expresso_Cremoso.png'
import havaiano from '../assets/Havaiano.png'
import irlandes from '../assets/Irlandes.png'
import latte from '../assets/Latte.png'
import macchiato from '../assets/Macchiato.png'
import mochaccino from '../assets/Mochaccino.png'
import { Coffee } from '../reducers/cart/reducer'

export const coffees: Coffee[] = [
  {
    description: 'O tradicional café feito com água quente e grãos moídos',
    id: '1',
    imageUrl: expresso,
    name: 'Expresso Tradicional',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL'],
  },
  {
    description: 'Expresso diluído, menos intenso que o tradicional',
    id: '2',
    imageUrl: americano,
    name: 'Expresso Americano',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL'],
  },
  {
    description: 'Café expresso tradicional com espuma cremosa',
    id: '3',
    imageUrl: expressoCremoso,
    name: 'Expresso Cremoso',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL'],
  },
  {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    id: '4',
    imageUrl: cafeGelado,
    name: 'Expresso Gelado',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    id: '5',
    imageUrl: cafeComLeite,
    name: 'Cafe com Leite',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    id: '6',
    imageUrl: latte,
    name: 'Latte',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    id: '7',
    imageUrl: capuccino,
    name: 'Capuccino',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    id: '8',
    imageUrl: macchiato,
    name: 'Macchiato',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    id: '9',
    imageUrl: mochaccino,
    name: 'Mochaccino',
    price: 9.9,
    qty: 0,
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    id: '10',
    imageUrl: chocolateQuente,
    name: 'Chocolate Quente',
    price: 9.9,
    qty: 0,
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    id: '11',
    imageUrl: cubano,
    name: 'Cubano',
    price: 9.9,
    qty: 0,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    description: 'Bebida adocicada preparada com café e leite de coco',
    id: '12',
    imageUrl: havaiano,
    name: 'Havaiano',
    price: 9.9,
    qty: 0,
    tags: ['ESPECIAL'],
  },
  {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    id: '13',
    imageUrl: arabe,
    name: 'Árabe',
    price: 9.9,
    qty: 0,
    tags: ['ESPECIAL'],
  },

  {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    id: '14',
    imageUrl: irlandes,
    name: 'Irlandes',
    price: 9.9,
    qty: 0,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
