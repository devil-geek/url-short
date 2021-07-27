import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Container, LargeButton } from "../../shared/styles"
import { StyledHero, HeroMobile } from "./styles"

const Hero = () => {
  return (
    <StyledHero>
      <HeroMobile>
        <StaticImage
          className="hero-img"
          src="../../images/illustration-working.svg"
          alt="Shortly"
        />
      </HeroMobile>
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
