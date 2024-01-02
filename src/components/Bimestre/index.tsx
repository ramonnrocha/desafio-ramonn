import { useState } from 'react'
import { ButtonAdd } from '../ButtonAddNote'
import { CardMateria } from '../CardMateria'
import { Container, Content, Header, Title } from './styles'
import { ModalAdd } from '../ModalAddNota'

interface PropsBimestre {
  idBimestre: 1 | 2 | 3 | 4
}

export function Bimestre({ idBimestre }: PropsBimestre) {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <>
      <Container>
        <Header>
          <Title>Bimestre {idBimestre}</Title>
          <ButtonAdd onClick={() => setShowModal(true)} />
        </Header>
        <Content>
          <CardMateria />
          <CardMateria />
          <CardMateria />
          <CardMateria />
        </Content>
      </Container>
      <ModalAdd cnpj="asd1" open={showModal} />
    </>
  )
}
