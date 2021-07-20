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
  }

  body {
    box-sizing: border-box;
    overflow-x: hidden;
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
`

export const Button = styled.button`
  outline: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border-radius: 5rem;
  background: hsl(180, 66%, 49%);
  border: 1px solid hsl(180, 66%, 39%);
  cursor: pointer;
  text-rendering: optimizeLegibility;
`

export const LargeButton = styled(Button)`
  padding: 1.8rem 4rem;
  font-size: 2.3rem;
  margin: 4rem 0;
`
