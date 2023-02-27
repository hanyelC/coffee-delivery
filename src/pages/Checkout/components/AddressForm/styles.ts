import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;

  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
`

export const AddressFormHeader = styled.div`
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const InputsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  & > div:first-child {
    max-width: 200px;
  }

  & > div:nth-child(3) {
    max-width: 6rem;
  }
`
