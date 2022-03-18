import React from 'react'
import Container from '../Container/Container'
import * as S from './style'

const Footer: React.FC = () => {
  // return <Container>Made with React & Firebase © 2022 Dispersioned</Container>
  return (
    <S.Wrapper>
      <Container>
        <S.Body>Made with React & Typescript © 2022 Dispersioned</S.Body>
      </Container>
    </S.Wrapper>
  )
}
export default Footer
