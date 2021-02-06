import React from 'react'
import { Container } from './styles'

const ChevronDown = () => {
  return (
    <Container>
      <svg
        style={{ margin: `2px -2rem`, zIndex: `-1` }}
        width="20"
        height="20"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
        ></path>
      </svg>
    </Container>
  )
}

export default ChevronDown
