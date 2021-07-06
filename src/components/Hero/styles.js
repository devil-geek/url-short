import styled from "@emotion/styled"
import background from "../../images/illustration-working.svg"
import { Button } from "../../shared/styles"

export const StyledHero = styled.section`
  background: #fff url(${background}) no-repeat right top;
  background-size: contain;
  min-height: 50rem;
  margin: 8rem 0;

  h1 {
    font-size: 8rem;
    max-width: 600px;
    line-height: 8rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.1rem;
    max-width: 510px;
    color: hsl(257, 7%, 63%);
    font-weight: 300;
  }
`

export const LargeButton = styled(Button)`
  padding: 1.8rem 4rem;
  font-size: 2.1rem;
  margin: 4rem 0;
`
