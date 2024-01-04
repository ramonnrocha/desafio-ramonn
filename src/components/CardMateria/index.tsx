import {
  ButtonTrash,
  CardContainer,
  CardStyleProps,
  ContentNota,
  Date,
  Header,
  IconSvg,
  NotaInfo,
  Title,
} from './styles'

import { Trash } from 'phosphor-react'

import { Tooltip, message } from 'antd'
import { format, parseISO } from 'date-fns'
import api from '../../services/api'

interface Props extends CardStyleProps {
  idNota: string
  date: string
  nota: number
  onUpdate: () => void
}

export function CardMateria({
  disciplina,
  idNota,
  onUpdate,
  date,
  nota,
}: Props) {
  async function deleteNote() {
    try {
      const response = await api.delete(`/result/${idNota}`)

      if (response) {
        message.success('Deletado com sucesso')
      }

      onUpdate()
    } catch (error) {
      message.success('Erro ao deletar')
    }
  }

  function verifyCorNota(nota: number) {
    if (nota < 6) {
      return '#FF5964'
    } else if (nota >= 6 && nota < 8) {
      return '#FFFF99'
    } else {
      return '#05FF00'
    }
  }
  return (
    <>
      <CardContainer disciplina={disciplina}>
        <Header>
          <NotaInfo>
            <Title>{disciplina}</Title>
            <Date>{format(parseISO(date), 'dd/MM/yyyy')}</Date>
          </NotaInfo>
          <Tooltip title="Remover">
            <ButtonTrash onClick={deleteNote}>
              <Trash size={28} />
            </ButtonTrash>
          </Tooltip>
        </Header>
        <ContentNota corNota={verifyCorNota(nota)}>
          <IconSvg color={verifyCorNota(nota)} />
          <span>Nota: {nota}</span>
        </ContentNota>
      </CardContainer>
    </>
  )
}
