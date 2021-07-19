import React from "react"
import { Container } from "../../shared/styles"
import { CardContainer, StyledStatics, Line } from "./styles"
import Card from "./Card"
import BrandLogo from "../../images/icon-brand-recognition.svg"
import DetailedLogo from "../../images/icon-detailed-records.svg"
import FullyLogo from "../../images/icon-fully-customizable.svg"

const Statics = () => {
  return (
    <StyledStatics>
      <Container>
        <h2>Advanced Statistics</h2>
        <h4>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h4>
        <CardContainer>
          <Card
            icon={BrandLogo}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content."
          />
          <Line />
          <Card
            icon={DetailedLogo}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions."
          />
          <Line />
          <Card
            icon={FullyLogo}
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement."
          />
        </CardContainer>
      </Container>
    </StyledStatics>
  )
}

export default Statics
