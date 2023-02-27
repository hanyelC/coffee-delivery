import React from 'react'
import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
}

export function Input({ optional = false, ...props }: InputProps) {
  return (
    <InputContainer optional={optional}>
      <input {...props} />
    </InputContainer>
  )
}
