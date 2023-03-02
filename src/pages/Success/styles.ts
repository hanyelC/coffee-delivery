import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  & > div {
    width: 100%;
    max-width: 526px;

    & > div:first-child {
      & > h1 {
        color: ${({ theme }) => theme.colors.brand['primary-dark']};
        font-family: ${({ theme }) => theme.fonts.header};
        font-weight: 800;
        font-size: 3.2rem;
        line-height: 1.3;
      }

      & > p {
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-family: ${({ theme }) => theme.fonts.text};
        font-weight: 400;
        font-size: 2rem;
        line-height: 1.3;

        margin-bottom: 4rem;
      }
    }
  }
`

export const OrderDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;

  width: 100%;

  border-radius: 6px 36px 6px 36px;

  background-color: ${({ theme }) => theme.colors.base.background};

  padding: 4rem;
`

export const GradientBorder = styled.div`
  width: 100%;
  padding: 1px;
  border-radius: 6px 36px 6px 36px;
  overflow: hidden;
  ${({ theme }) => css`
    background-image: linear-gradient(
      to right,
      ${theme.colors.brand.primary},
      ${theme.colors.brand.secondary}
    );
  `}
`

export const OrderDetailsItem = styled.li`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;

  & > div:last-child {
    & > p {
      color: ${({ theme }) => theme.colors.base.text};
      font-family: ${({ theme }) => theme.fonts.text};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
`

interface ListIconProps {
  variant: 'primary' | 'primary-dark' | 'secondary'
}

export const ListIcon = styled.div<ListIconProps>`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  border-radius: 1000px;
  background-color: ${({ theme, variant }) => theme.colors.brand[variant]};

  & > svg {
    fill: ${({ theme }) => theme.colors.base.background};
  }

  & > svg path,
  & > svg line {
    stroke: ${({ theme }) => theme.colors.base.background};
  }
`
