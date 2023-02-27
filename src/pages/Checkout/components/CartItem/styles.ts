import styled from 'styled-components'
import { CounterContainer } from '../../../../components/Counter/styles'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0.8rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

export const Counter = styled(CounterContainer)`
  height: 3.2rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.8rem;

  & > span:first-child {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  & > img {
    width: 6.4rem;
    height: 6.4rem;
  }
`

export const Price = styled.span`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.3;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  height: 3.2rem;

  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.base.button};

  border: 0;
  border-radius: 6px;

  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.base.text};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;

  & > svg line,
  & > svg path {
    stroke: ${({ theme }) => theme.colors.brand.secondary};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.base.hover};
    color: ${({ theme }) => theme.colors.base.subtitle};

    & > svg path:nth-last-child(2) {
      stroke: ${({ theme }) => theme.colors.brand['secondary-dark']};
    }
  }
`
