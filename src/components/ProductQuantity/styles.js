import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 10%;
  border-bottom: solid;
  margin: 0 2rem;
  margin-bottom: 1rem;
`

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 33.3333%;
  text-align: left;
`

export const Button = styled.button`
  width: 20px;
  background: transparent;
  border: none;
  font-size: 2rem;
  &:focus {
    outline: none;
  }
`

export const Amount = styled.p`
  margin: 1rem;
`
