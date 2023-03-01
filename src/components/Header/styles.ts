import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 112rem;
    margin: 0 auto;

    & > nav {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }
  }
`

interface CheckoutProps {
  totalOfItems?: number
}

export const Checkout = styled.div<CheckoutProps>`
  background-color: ${({ theme }) => theme.colors.brand['primary-light']};
  padding: 0.8rem;
  border-radius: 6px;
  position: relative;

  ${({ totalOfItems }) => {
    return totalOfItems
      ? css`
          &::after {
            position: absolute;
            content: '${totalOfItems}';
            height: 20px;
            width: 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 100px;

            top: -0.8rem;
            right: -0.8rem;

            background-color: ${({ theme }) =>
              theme.colors.brand['primary-dark']};
            color: ${({ theme }) => theme.colors.base.white};
            font-family: ${({ theme }) => theme.fonts.text};
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1;
          }
        `
      : ''
  }}

  & > svg {
    fill: ${({ theme }) => theme.colors.brand['primary-dark']};
  }
`

export const Address = styled.div`
  background-color: ${({ theme }) => theme.colors.brand['secondary-light']};
  color: ${({ theme }) => theme.colors.brand['secondary-dark']};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  font-family: ${({ theme }) => theme.fonts.text};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 1rem 0.8rem;
  border-radius: 6px;

  & > svg {
    fill: ${({ theme }) => theme.colors.brand.secondary};
  }
`
