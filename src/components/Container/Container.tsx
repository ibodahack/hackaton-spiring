import React from 'react'
import * as S from './style'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <S.Body>{children}</S.Body>
}
export default Container
