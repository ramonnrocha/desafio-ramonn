import {
  ButtonTrash,
  CardContainer,
  ContentNota,
  Date,
  Header,
  Icon,
  NotaInfo,
  Title,
} from './styles'

import { Trash } from 'phosphor-react'

import IconChart from '../../assets/chart.svg'

export function CardMateria() {
  return (
    <>
      <CardContainer>
        <Header>
          <NotaInfo>
            <Title>Biologia</Title>
            <Date>02/08/2023</Date>
          </NotaInfo>
          <ButtonTrash>
            <Trash size={28} />
          </ButtonTrash>
        </Header>
        <ContentNota>
          <Icon src={IconChart} />
          <span>nota 9.8</span>
        </ContentNota>
      </CardContainer>
    </>
  )
}
