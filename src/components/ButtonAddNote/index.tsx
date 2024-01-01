import { ButtonHTMLAttributes } from 'react'
import { Container, Text } from './styles'

import { Plus } from 'phosphor-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | number
}

export function ButtonAdd({ text, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>Lançar nota{text}</Text>
      <Plus size={24} />
    </Container>
  )
}
