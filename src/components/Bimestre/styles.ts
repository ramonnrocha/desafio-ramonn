import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`

export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  row-gap: 2rem;
  column-gap: 4rem;
  padding: 2rem 1rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas em dispositivos menores */
    grid-gap: 2rem;
  }
`

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #fff;
`
