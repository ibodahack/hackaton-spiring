import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: inherit;
    background: linear-gradient(
      90.42deg,
      #152654 -4.59%,
      #172f6d 15.27%,
      #10214a 28.47%,
      #132e72 45.38%,
      #071a4e 65.45%,
      #222222 96.82%
    );

    @media (max-width: 767px) {
      background: linear-gradient(
        63deg,
        rgba(8, 2, 105, 1) 0%,
        rgba(9, 15, 94, 1) 31%,
        rgba(21, 19, 110, 1) 52%,
        rgba(14, 13, 84, 1) 82%,
        rgba(13, 21, 78, 1) 100%
      );
    }
  }
`

export const Body = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  position: relative;
  display: inline-block;
  height: 90px;
  z-index: 1005;

  @media (max-width: 767px) {
    height: 60px;
  }
`

export const Navbar = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin-left: 100px;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 50px;
  z-index: 1005;

  @media (max-width: 767px) {
    margin-left: 0;
    padding: 120px 40px 40px 40px;
    position: fixed;
    transform: ${({ isOpen }) => (!isOpen ? 'translateX(-100%)' : '')};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    justify-content: flex-end;
    align-content: flex-start;
    text-align: right;
    grid-auto-flow: row;
    grid-gap: 35px;
    z-index: 995;
    transition: all 0.5s ease;
    background: linear-gradient(
      63deg,
      rgba(8, 2, 105, 1) 0%,
      rgba(24, 26, 78, 1) 31%,
      rgba(42, 40, 111, 1) 52%,
      rgba(52, 44, 131, 1) 70%,
      rgba(28, 77, 143, 1) 100%
    );
  }
  @media (max-width: 575px) {
    padding: 120px 25px 25px 25px;
  }
`

export const Navlink = styled(NavLink)`
  position: relative;
  color: #fff;
  font-size: 30px;
  transition: all 0.3s ease;

  &.active {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    font-size: 40px;
  }
  @media (max-width: 575px) {
    font-size: 35px;
  }
  @media (max-width: 479px) {
    font-size: 32px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
