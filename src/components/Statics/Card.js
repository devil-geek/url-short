import React from "react"
import { CardIcon, CardTitle, StyledCard } from "./styles"

const Card = ({ title, text, icon }) => {
  return (
    <StyledCard>
      <CardIcon>
        <img src={icon} alt={title} />
      </CardIcon>
      <CardTitle>{title}</CardTitle>
      <p>{text}</p>
    </StyledCard>
  )
}

export default Card
