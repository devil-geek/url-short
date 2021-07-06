import React from "react"
import { Container } from "../../shared/styles"
import { StyledHero, LargeButton } from "./styles"
const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <h1>More than just shorter links</h1>

        <h3>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h3>

        <LargeButton>Get Started</LargeButton>
      </Container>
    </StyledHero>
  )
}

export default Hero
