/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, ModalProps } from 'antd'
import {
  ButtonConfirm,
  ButtonDisciplina,
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

interface FormProps {
  cnpj: string
}

interface IProps extends ModalProps, FormProps {}

export function ModalAdd({ ...rest }: IProps) {
  const [form] = useForm()

  function handleAddNote() {
    const values = form.getFieldsValue()
    console.log(values)
  }

  const validateGrade = (_rule: any, value: string) => {
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
        <X size={32} />
      </Header>

      <Content>
        <Subtitle>Disciplina</Subtitle>
        <ContainerDisciplina>
          <ButtonDisciplina>Biologia</ButtonDisciplina>
          <ButtonDisciplina>Artes</ButtonDisciplina>
          <ButtonDisciplina>Geografia</ButtonDisciplina>
          <ButtonDisciplina>Sociologia</ButtonDisciplina>
        </ContainerDisciplina>

        <Form form={form} onFinish={handleAddNote} layout="vertical">
          <Item
            label="Nota"
            name="nota"
            rules={[
              { validator: validateGrade },
              {
                message: 'Por favor, insira a nota da disciplina.',
              },
            ]}
          >
            <InputNota placeholder="0.0" />
          </Item>
          <ButtonConfirm type="submit">Confirmar</ButtonConfirm>
        </Form>
      </Content>
    </CustomModal>
  )
}
