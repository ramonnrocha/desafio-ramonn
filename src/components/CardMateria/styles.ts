import styled, { css } from 'styled-components'
import { IconChart } from '../IconChart'

export interface CardStyleProps {
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
}

export interface ColorNoteIndentifyType {
  corNota: string
}

export const CardContainer = styled.div<CardStyleProps>`
  width: 9.875rem;
  height: 9rem;
  padding-block: 1rem;
  border-radius: 20px;

  ${({ disciplina }) =>
    disciplina === 'Biologia' &&
    css`
      background: ${({ theme }) => theme.colors['base-card-biologia']};
    `}

  ${({ disciplina }) =>
    disciplina === 'Artes' &&
    css`
      background: ${({ theme }) => theme.colors['base-card-artes']};
    `}

    ${({ disciplina }) =>
    disciplina === 'Geografia' &&
    css`
      background: ${({ theme }) => theme.colors['base-card-geografia']};
    `}

    ${({ disciplina }) =>
    disciplina === 'Sociologia' &&
    css`
      background: ${({ theme }) => theme.colors['base-card-sociologia']};
    `}
`

export const Header = styled.div`
  width: 100%;
  padding-inline: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`

export const NotaInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.p`
  font-size: ${({ theme }) => theme.textSizes['title-title-xs']};
  color: ${({ theme }) => theme.colors['base-text']};
`

export const Date = styled.span`
  font-size: ${({ theme }) => theme.textSizes['components-button-s']};
  font-weight: 400;
`
export const ContentNota = styled.span<ColorNoteIndentifyType>`
  width: 100%;
  height: 1.875rem;
  background: rgba(15, 15, 15, 0.7);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.8rem;
  ${({ corNota }) => css`
    color: ${corNota};
  `}
`

export const IconSvg = styled(IconChart)`
  width: 1rem;
  height: 1rem;
`

export const ButtonTrash = styled.button`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 2rem;
  color: #ff5964;
  background: transparent;
  border: none;
  margin-right: -3.5rem;
  margin-top: -0.5rem;
`
