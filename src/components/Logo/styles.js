import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin: 0rem 2rem;
`

export const Dots = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #0000;
  color: #0000;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -40px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #0000;
    color: #0000;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  &:after {
    left: 40px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #0000;
    color: #0000;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #000000;
    }
    50%,
    100% {
      background-color: #f6f6f6;
    }
  }
`

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-top: auto;
  margin-left: -23px;
`
