import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import Container from '../Container/Container'
import BurgerBtn from './BurgerBtn/BurgerBtn'
import * as S from './style'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleBurger = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  return (
    <S.Header>
      <Container>
        <S.Body>
          <Link to="/">
            <S.Logo src={logo} alt="Dispersioned logo" />
          </Link>
          <S.Navbar isOpen={isOpen}>
            <S.Navlink to="/projects">Projects</S.Navlink>
            <S.Navlink to="/experience">Work Experience</S.Navlink>
            <S.Navlink to="/bio">Bio</S.Navlink>
          </S.Navbar>
          <BurgerBtn onClick={handleBurger} isActive={isOpen} />
        </S.Body>
      </Container>
    </S.Header>
  )
}
export default Header
