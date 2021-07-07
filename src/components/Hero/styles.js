import styled from "@emotion/styled"
import background from "../../images/illustration-working.svg"

export const StyledHero = styled.section`
  background: #fff url(${background}) no-repeat right top;
  background-size: contain;
  min-height: 50rem;
  margin: 8rem 0;

  h1 {
    font-size: 8rem;
    max-width: 60rem;
    line-height: 8rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.3rem;
    max-width: 55rem;
    color: hsl(257, 7%, 63%);
    font-weight: 400;
  }
`
