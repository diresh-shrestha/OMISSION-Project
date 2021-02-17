import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import 'normalize.css'
import SEO from '../components/seo'

const Recaptcha_Site_Key = process.env.GATSBY_RECAPTCHA_SITE_KEY

export const Button = styled.button`
  margin: 0px 0px 0px auto;
  min-width: 0px;
  width: 90%;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 10rem auto;
  text-align: center;
`

const InputWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 1rem;

  div > div > div {
    width: 100px;
  }
`

const StyledInput = styled.input`
  width: 90%;
  padding: 1rem;
  border: 2px solid;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  width: 90%;
  padding: 1rem;
  border: 2px solid;
  border-radius: 10px;
`

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const [disabled, setDisabled] = useState(true)

  const handleChange = () => {
    setDisabled(false)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/1863898c-917b-4284-a53c-c9768c665e56',
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          'Thanks for reaching out to us! We will get back to you soon.',
          form
        )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <>
      <SEO
        title="Contact"
        pathname="contact/"
        description="Contact Omission Project"
      />

      <Container>
        <form onSubmit={handleOnSubmit}>
          <InputWrapper>
            <StyledInput
              type="text"
              name="name"
              placeholder="*Full Name"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <StyledInput
              type="email"
              name="email"
              placeholder="*Email"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <TextArea
              name="message"
              rows="5"
              required
              placeholder="*Write a message.."
            />
          </InputWrapper>
          <InputWrapper>
            <ReCAPTCHA sitekey={Recaptcha_Site_Key} onChange={handleChange} />
          </InputWrapper>

          <InputWrapper>
            {serverState.status && (
              <p className={!serverState.status.ok ? 'errorMsg' : ''}>
                {serverState.status.msg}
              </p>
            )}
          </InputWrapper>
          <InputWrapper>
            <Button type="submit" disabled={disabled}>
              SEND
            </Button>
          </InputWrapper>
        </form>
      </Container>
    </>
  )
}

export default ContactPage
