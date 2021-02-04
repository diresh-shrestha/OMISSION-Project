import React from 'react'
import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

export const Select = styled.select`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: block;
  width: 150px;
  padding: 8px;
  appearance: none;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
`

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  margin: 1rem auto;
`

export const Button = styled.button`
  margin: 0px 0px 0px auto;
  min-width: 0px;
  width: 50%;
  height: 50px;
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
`

export const StyledLabel = styled.label`
  margin: 1rem 0;
`
