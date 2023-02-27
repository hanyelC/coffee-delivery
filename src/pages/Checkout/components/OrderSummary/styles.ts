import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.3;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 1.6rem;
    }
  }

  & > div:last-child * {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: 700;
    font-size: 2rem;
  }
`
