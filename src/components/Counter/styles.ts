import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors.base.button};

  padding: 8px;
  border-radius: 6px;

  & > button {
    cursor: pointer;
    border: 0;
    background: none;

    & > svg line {
      stroke: ${({ theme }) => theme.colors.brand.secondary};
    }
  }

  & > button:hover {
    & > svg line {
      stroke: ${({ theme }) => theme.colors.brand['secondary-dark']};
    }
  }

  & > div {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.base.title};
  }
`
