import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.base.background};

  & > * {
    max-width: 112rem;
    margin: 0 auto;
  }
`
