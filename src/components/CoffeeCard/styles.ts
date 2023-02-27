import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.base.card};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  border-radius: 6px 36px 6px 36px;

  max-width: 25.6rem;

  & > * {
    transform: translateY(-20px);
  }

  & > div:first-child {
    width: 12rem;
    height: 12rem;
  }

  & > h3 {
    margin-top: 1.6rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    font-family: ${({ theme }) => theme.fonts.header};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  & > p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.brand['primary-light']};

  padding: 4px 8px;
  border-radius: 100px;

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.brand['primary-dark']};
  text-transform: uppercase;
`

export const Buy = styled.div`
  margin: 3.2rem 0.4rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BuyActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.base.text};

  & > strong {
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.3;
    font-family: ${({ theme }) => theme.fonts.header};
    color: ${({ theme }) => theme.colors.base.text};
  }
`

export const CartButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.brand['secondary-dark']};
  border-radius: 6px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.base.card};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.brand.secondary};
  }
`
