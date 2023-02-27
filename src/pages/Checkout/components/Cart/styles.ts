import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.base.card};

  border-radius: 6px 44px 6px 44px;

  & > button {
    width: 100%;

    margin-top: 2.4rem;
    padding: 1.2rem 0.8rem;

    border: 0;
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.base.white};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6;

    background-color: ${({ theme }) => theme.colors.brand.primary};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.brand['primary-dark']};
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.base.button};
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-bottom: 1.2rem;
`
