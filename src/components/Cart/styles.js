import React from 'react'
import styled from 'styled-components'

export const Items = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddf;
  margin: 8px;
  padding: 1rem;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  margin: 1rem;
  min-width: 0px;
  cursor: pointer;
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
