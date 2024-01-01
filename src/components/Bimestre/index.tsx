import { ButtonAdd } from '../ButtonAddNote'
import { CardMateria } from '../CardMateria'
import { Container, Content, Header, Title } from './styles'

interface PropsBimestre {
  idBimestre: 1 | 2 | 3 | 4
}

export function Bimestre({ idBimestre }: PropsBimestre) {
  return (
    <Container>
      <Header>
        <Title>Bimestre {idBimestre}</Title>
        <ButtonAdd />
      </Header>
      <Content>
        <CardMateria />
        <CardMateria />
        <CardMateria />
        <CardMateria />
      </Content>
    </Container>
  )
}
