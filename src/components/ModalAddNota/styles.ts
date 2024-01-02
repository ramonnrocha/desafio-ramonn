import styled from 'styled-components'
import { Modal, Input, Form } from 'antd'

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #0f0f0f;
  }

  .ant-modal-body {
    padding: 1rem 2rem;
    color: #fff;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`

export const ContainerDisciplina = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas em dispositivos menores */
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2.5rem;
`

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-weight: 400;
  line-height: 18px;
`

export const ButtonDisciplina = styled.button`
  width: 8.125rem;
  height: 3.3rem;
  border-radius: 20px;
  background: #cc4090;
  border: none;
`

export const ButtonConfirm = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 20px;
  background: #e9ff1a;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-left: auto;
`

export const InputNota = styled(Input)`
  width: 5rem;
  height: 3rem;
  background: transparent;
  border: 1px solid #424242;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #424242;

  &:focus {
    box-shadow: none;
    border-color: #424242;
  }

  &:hover {
    box-shadow: none;
    border-color: #424242;
  }

  &::placeholder {
    color: #424242;
  }
`

export const Item = styled(Form.Item)`
  .ant-form-item-label {
    label {
      font-family: ${({ theme }) => theme.fonts.regular};
      font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
      font-weight: 400;
      line-height: 18px;
      color: #fff;
      opacity: 0.8;
    }
  }
`
