import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles'

export const SelectContainer = styled.div`
  display: flex;
  margin: 20px 5px;
  @media (max-width: ${breakpoints.s}px) {
    margin: 0.5rem 0.5rem;
  }
`

export const Select = styled.select`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: block;
  width: 100px;
  padding: 8px;
  appearance: none;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  height: fit-content;
`

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 0;
  margin-top: 10px;
`

export const Button = styled.button`
  margin: 0px 0px 0px auto;
  min-width: 0px;
  width: 100%;
  height: auto;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  padding: 8px 16px;
  box-sizing: border-box;
  font-family: 'Work Sans', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #333;
  transition: all 0.3s ease 0s;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: #333;
  &:hover {
    background-color: transparent;
    color: #333;
  }
`

export const CounterContainer = styled.div`
  display: flex;
  width: 150px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.s}px) {
    margin: -0.5rem 0.5rem;
  }
`

export const StyledLabel = styled.label`
  display: none;
`

export const Price = styled.p`
  margin: 2rem auto;
  font-weight: bold;
  font-size: 1.25 rem;

  @media (max-width: ${breakpoints.s}px) {
    margin: 1rem 0.5rem;
  }
`
