import styled, { css } from 'styled-components'

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;

  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
`

export const PaymentFormHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  & > svg line,
  & > svg circle,
  & > svg path {
    stroke: ${({ theme }) => theme.colors.brand['primary-dark']};
  }

  & h5 {
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  & p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.base.text};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

interface PaymentOptionProps {
  isChecked: boolean
}

export const PaymentOption = styled.label<PaymentOptionProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.base.button};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.base.hover};
  }

  & > input {
    display: none;
  }

  ${({ isChecked, theme }) =>
    isChecked
      ? css`
          background-color: ${theme.colors.brand['secondary-light']};
          border-color: ${theme.colors.brand.secondary};
        `
      : ''}

  & > span {
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.base.text};
  }

  & > svg *:not(rect:first-of-type) {
    stroke: ${({ theme }) => theme.colors.brand.secondary};
  }
`
