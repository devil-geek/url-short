import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* this defines 1rem is */
    font-size: 62.5%;

    @media only screen and (max-width: 75em) {
      font-size: 54%;
    }

    @media only screen and (max-width: 56.25em) {
      font-size: 50%;
    }

    @media only screen and (max-width: 37.5em) {
      font-size: 45%;
    }
  }

  body {
    box-sizing: border-box;
    overflow-x: hidden;
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: hsl(260, 8%, 14%);
  }

  a {
    text-decoration: none;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 3rem;
`

export const Button = styled.button`
  outline: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border-radius: 5rem;
  background: hsl(180, 66%, 49%);
  border: 1px solid hsl(180, 66%, 49%);
  cursor: pointer;
  text-rendering: optimizeLegibility;
  transition: all 0.3s;
  &:hover {
    background: hsl(180, 66%, 65%);
    border: 1px solid hsl(180, 66%, 50%);
  }
  &:disabled {
    background: hsl(260, 8%, 14%);
    border: 1px solid hsl(260, 8%, 14%);
    cursor: not-allowed;
  }
`

export const LargeButton = styled(Button)`
  padding: 1.8rem 4rem;
  font-size: 2.3rem;
  margin: 4rem 0;
  width: 22.5rem;
`
