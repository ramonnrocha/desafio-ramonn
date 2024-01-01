import styled from 'styled-components'

export const Container = styled.button`
  height: 3rem;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;

  &:hover {
    opacity: 0.7;
  }
`
export const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #0f0f0f;
`
