import styled from 'styled-components'

export const HomeContainer = styled.div`
  & > main {
    max-width: 112rem;
    margin: 3.2rem auto;
  }
`

export const Tag = styled.button`
  background: none;
  border: 0;

  padding: 6px 12px;

  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  border-radius: 100px;

  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand['primary-dark']};
  font-family: ${({ theme }) => theme.fonts.text};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.base.background};
  }
`

export const CoffeeListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5.4rem;

  & > h2 {
    font-size: 3.2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-family: ${({ theme }) => theme.fonts.header};
  }
`

export const CoffeeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 3.2rem;
`

export const Filters = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`
