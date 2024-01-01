import { Bimestre } from '../../components/Bimestre'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Bimestre idBimestre={1} />
      <Bimestre idBimestre={2} />
      <Bimestre idBimestre={3} />
      <Bimestre idBimestre={4} />
    </Container>
  )
}
