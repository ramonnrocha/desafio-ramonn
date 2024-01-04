import { Bimestre } from '../../components/Bimestre'
import Loading from '../../components/Loading'
import api from '../../services/api'
import { Container } from './styles'
import { useQuery } from '@tanstack/react-query'

export function Home() {
  async function getDados() {
    const { data } = await api.get('/result')

    return data
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['resultados'],
    queryFn: () => getDados(),
    refetchOnMount: true,
  })

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    )

  return (
    <Container>
      <Bimestre onUpdate={refetch} data={data.PRIMEIRO} idBimestre={1} />
      <Bimestre onUpdate={refetch} data={data.SEGUNDO} idBimestre={2} />
      <Bimestre onUpdate={refetch} data={data.TERCEIRO} idBimestre={3} />
      <Bimestre onUpdate={refetch} data={data.QUARTO} idBimestre={4} />
    </Container>
  )
}
