/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { ButtonAdd } from '../ButtonAddNote'
import { CardMateria } from '../CardMateria'
import { Container, Content, Header, Title } from './styles'
import { ModalAdd } from '../ModalAddNota'
import { Tooltip } from 'antd'

interface dataProps {
  id: string
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
  nota: number
  criadoEm: string
  atualizadoEm: string
}

interface PropsBimestre {
  idBimestre: 1 | 2 | 3 | 4
  data: dataProps[]
  onUpdate: () => void
}

export function Bimestre({ idBimestre, data, onUpdate }: PropsBimestre) {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <Container>
        <Header>
          <Title>Bimestre {idBimestre}</Title>
          <Tooltip title="Adicionar">
            <ButtonAdd onClick={() => setShowModal(true)} />
          </Tooltip>
        </Header>
        <Content>
          {data.map((item) => (
            <CardMateria
              nota={item.nota}
              date={item.atualizadoEm}
              onUpdate={onUpdate}
              idNota={item.id}
              disciplina={item.disciplina}
            />
          ))}
        </Content>
      </Container>
      <ModalAdd
        onUpdate={onUpdate}
        idBimestre={idBimestre}
        setCloseModal={setShowModal}
        open={showModal}
      />
    </>
  )
}
