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
  column-gap: 9rem;
  row-gap: 9rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas em dispositivos menores */
  }
`

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #fff;
`
