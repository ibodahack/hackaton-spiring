import React from 'react'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Wrapper } from '../../style/global'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1 style={{ fontWeight: 400 }}>Hi, I’m Max. A student frontend developer </h1>
        <p style={{ paddingTop: 25 }}>
          So far there is no important information here, yet you can see my projects.
        </p>
      </Container>
      <Footer />
    </Wrapper>
  )
}
export default Home
