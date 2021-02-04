import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles'

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
    background: ${({ open }) => (open ? 'white' : 'black')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 7px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    // :nth-child(2) {
    //   opacity: ${({ open }) => (open ? '0' : '1')};
    //   transform: ${({ open }) =>
      open ? 'translateX(20px)' : 'translateX(0)'};
    // }

    :nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: ${breakpoints.m}px) {
    display: none;
  }
`
