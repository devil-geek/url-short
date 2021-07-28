import styled from "@emotion/styled"
import background from "../../images/illustration-working.svg"

export const StyledHero = styled.section`
  background: #fff url(${background}) no-repeat right top;
  background-size: contain;
  min-height: 50rem;
  margin: 8rem 0;

  @media only screen and (max-width: 56.25em) {
    text-align: center;
    margin: 0;
    background: #fff;
  }

  h1 {
    font-size: 8rem;
    max-width: 60rem;
    line-height: 8rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 56.25em) {
      max-width: 100%;
      font-size: 5rem;
      line-height: 5rem;
    }
  }

  h3 {
    font-size: 2.3rem;
    max-width: 55rem;
    color: hsl(257, 7%, 63%);
    font-weight: 400;
    @media only screen and (max-width: 56.25em) {
      max-width: 100%;
    }
  }
`
export const HeroMobile = styled.div`
  display: none;
  overflow: hidden;

  @media only screen and (max-width: 56.25em) {
    display: block;
    margin: 9rem auto 5rem;
    .hero-img {
      right: -10rem;
    }
  }
`
