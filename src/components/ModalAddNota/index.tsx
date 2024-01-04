/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react'
import { Form, ModalProps, message } from 'antd'
import {
  ButtonConfirm,
  ButtonDisciplina,
  CloseButton,
  ContainerDisciplina,
  Content,
  CustomModal,
  Header,
  InputNota,
  Item,
  Subtitle,
  Title,
} from './styles'
import { X } from 'phosphor-react'
import { useForm } from 'antd/es/form/Form'
import api from '../../services/api'
import { useMutation } from '@tanstack/react-query'

interface IProps extends ModalProps {
  setCloseModal: (e: boolean) => void
  idBimestre: number
  onUpdate: () => void
}

export function ModalAdd({
  idBimestre,
  setCloseModal,
  onUpdate,
  ...rest
}: IProps) {
  const [form] = useForm()
  const [valueDisciplina, setValueDisciplina] = useState<string>('')

  async function handleAddNote() {
    const values = form.getFieldsValue()
    form.setFieldsValue({ disciplina: valueDisciplina })

    let bimestre

    switch (idBimestre) {
      case 1:
        bimestre = 'PRIMEIRO'
        break
      case 2:
        bimestre = 'SEGUNDO'
        break
      case 3:
        bimestre = 'TERCEIRO'
        break
      case 4:
        bimestre = 'QUARTO'
        break
    }

    try {
      const response = await api.post('/result', {
        bimestre,
        disciplina: values.disciplina,
        nota: parseFloat(values.nota),
      })

      if (response) {
        message.success('Nota Cadastrada com sucesso')
      }
      onUpdate()
    } catch (error) {
      message.error('Não foi possivel cadastrar nota')
    } finally {
      form.resetFields()
      setCloseModal(false)
    }
  }

  const { mutate: createNewNote } = useMutation({
    mutationKey: ['result'],
    mutationFn: handleAddNote,
  })

  const validateNote = (_rule: any, value: string) => {
    const floatValue = parseFloat(value)
    if (isNaN(floatValue)) {
      return Promise.reject('Por favor, insira um número válido.')
    } else if (floatValue < 0 || floatValue > 10) {
      return Promise.reject('A nota deve estar entre 0 e 10.')
    } else {
      return Promise.resolve()
    }
  }

  return (
    <CustomModal width={700} closeIcon={null} footer={null} {...rest}>
      <Header>
        <Title>Bimestre 1</Title>
        <CloseButton onClick={() => setCloseModal(false)}>
          <X size={32} />
        </CloseButton>
      </Header>

      <Content>
        <Subtitle>Disciplina</Subtitle>
        <Form form={form} layout="vertical">
          <Form.Item
            name="disciplina"
            rules={[
              { required: true, message: 'Por favor, Escolha uma disciplina' },
            ]}
            style={{ marginTop: '-3rem' }}
          />
          <ContainerDisciplina>
            <ButtonDisciplina
              isActive={valueDisciplina === 'Biologia'}
              disciplina="Biologia"
              onClick={() => {
                setValueDisciplina('Biologia')
                form.setFieldsValue({ disciplina: 'Biologia' })
              }}
            >
              Biologia
            </ButtonDisciplina>
            <ButtonDisciplina
              isActive={valueDisciplina === 'Artes'}
              disciplina="Artes"
              onClick={() => {
                setValueDisciplina('Artes')
                form.setFieldsValue({ disciplina: 'Artes' })
              }}
            >
              Artes
            </ButtonDisciplina>
            <ButtonDisciplina
              isActive={valueDisciplina === 'Geografia'}
              disciplina="Geografia"
              onClick={() => {
                setValueDisciplina('Geografia')
                form.setFieldsValue({ disciplina: 'Geografia' })
              }}
            >
              Geografia
            </ButtonDisciplina>
            <ButtonDisciplina
              isActive={valueDisciplina === 'Sociologia'}
              disciplina="Sociologia"
              onClick={() => {
                setValueDisciplina('Sociologia')
                form.setFieldsValue({ disciplina: 'Sociologia' })
              }}
            >
              Sociologia
            </ButtonDisciplina>
          </ContainerDisciplina>

          <Item
            label="Nota"
            name="nota"
            rules={[
              { validator: validateNote },
              {
                message: 'Por favor, insira a nota da disciplina.',
              },
            ]}
          >
            <InputNota placeholder="0.0" />
          </Item>
          <ButtonConfirm onClick={() => createNewNote()} type="submit">
            Confirmar
          </ButtonConfirm>
        </Form>
      </Content>
    </CustomModal>
  )
}
