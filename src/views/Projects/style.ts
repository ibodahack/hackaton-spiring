import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 991px) {
    align-items: center;
  }
`

export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-gap: 50px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }

  &:not(:first-child) {
    margin-top: 10%;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: -16.5%;
      transform: translateX(-50%);
      width: 75%;
      height: 2px;
      background: #fff;

      @media (max-width: 991px) {
        top: -5%;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
`

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;

  @media (max-width: 565px) {
    padding-left: 35px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 1em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;

    @media (max-width: 565px) {
      left: 7px;
      top: 0.8em;
      width: 14px;
      height: 14px;
    }
  }
`

export const Description = styled.p`
  margin-top: 10px;
  font-family: 'ABeeZee';
`

export const Tags = styled.p`
  margin-top: 25px;
  font-weight: 700;
`

export const CardLink = styled.a`
  position: relative;
  margin-top: 15px;
  display: block;
  margin-top: auto;
  color: #fff;
  font-size: 24px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background: #fff;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`

export const CardImg = styled.div`
  object-fit: contain;
`
