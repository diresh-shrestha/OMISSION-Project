import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  display: flex;
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LogoImg = styled.img`
  height: 200px;
  width: 200px;
`

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    z-index: 20;
    width: 2rem;
    height: 0.15rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 7px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const PageLink = styled(Link)`
  position: relative;
  padding: 0.2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
`

export const ListItems = styled.li`
  margin-bottom: 1rem;
`

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0.5rem;
  font-weight: bold;
`

export const ListWrapper = styled.div`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 0.5s ease-out;
`
