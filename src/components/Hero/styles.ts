import styled from 'styled-components'
import heroBackground from '../../assets/hero-background.png'

export const HeroWrapper = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${heroBackground});
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  padding: 9.2rem 0;
  gap: 5.6rem;

  max-width: 112rem;
  margin: 0 auto;

  & > div:first-child {
    width: 100%;
    max-width: 476px;
    & > img {
      width: 100%;
    }
  }

  & > div:last-child {
    & > h1 {
      font-size: 4.8rem;
      line-height: 1.3;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.base.title};
      font-family: ${({ theme }) => theme.fonts.header};
      margin-bottom: 1.6rem;
    }

    & > p {
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-family: ${({ theme }) => theme.fonts.text};
      margin-bottom: 6.6rem;
    }

    & > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      gap: 4rem;

      & > li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;

        font-size: 1.6rem;
        line-height: 1.3;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.base.text};
        font-family: ${({ theme }) => theme.fonts.text};
      }
    }
  }
`

interface ListItemProps {
  variant?: 'primary' | 'primary-dark' | 'secondary' | 'text'
}

export const ListIcon = styled.div<ListItemProps>`
  width: 3.2rem;
  height: 3.2rem;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ theme, variant = 'primary' }) => {
    const variants = {
      primary: theme.colors.brand.primary,
      'primary-dark': theme.colors.brand['primary-dark'],
      secondary: theme.colors.brand.secondary,
      text: theme.colors.base.text,
    }

    const color = variants[variant]

    return color
  }};

  & > svg {
    fill: ${({ theme }) => theme.colors.base.background};
  }
`
