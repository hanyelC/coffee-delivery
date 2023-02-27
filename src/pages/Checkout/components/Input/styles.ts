import styled, { css } from 'styled-components'

interface InputContainerProps {
  optional?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.base.input};
  border: 1px solid ${({ theme }) => theme.colors.base.button};
  border-radius: 4px;

  width: 100%;

  & > input {
    width: 100%;
    color: ${({ theme }) => theme.colors.base.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.3;
    border: 0;
    outline: 0;
    background: none;
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.colors.base.label};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.3;
  }

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.brand['primary-dark']};
  }

  ${({ optional }) =>
    optional
      ? css`
          &::after {
            content: 'Opcional';
            margin-left: 4px;
            color: ${({ theme }) => theme.colors.base.label};
            font-family: ${({ theme }) => theme.fonts.text};
            font-weight: 400;
            font-style: italic;
            font-size: 1.2rem;
            line-height: 1.3;
          }
        `
      : ''};
`
