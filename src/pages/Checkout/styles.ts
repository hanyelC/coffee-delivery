import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 3.2rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  & > div {
    width: 100%;
    & > h3 {
      font-family: ${({ theme }) => theme.fonts.header};
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 1.3;
      color: ${({ theme }) => theme.colors.base.subtitle};
      margin-bottom: 1.5rem;
    }
  }

  & > div:last-child {
    max-width: 448px;
  }
`

export const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
