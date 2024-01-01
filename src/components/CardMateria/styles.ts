import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 9.875rem;
  height: 9rem;
  padding-block: 1rem;
  background: ${({ theme }) => theme.colors['base-card-biologia']};
  border-radius: 20px;
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
export const ContentNota = styled.span`
  width: 100%;
  height: 1.875rem;
  background: rgba(15, 15, 15, 0.7);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: green;
  margin-top: 2rem;
  padding: 0.8rem;
`

export const Icon = styled.img`
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
