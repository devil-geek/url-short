import React from "react"
import {
  StyledShortener,
  RectButton,
  Input,
  ShortLinkContainer,
  ShortLink,
  CopyButton,
  OriginalLink,
} from "./styles"
import { Container } from "../../shared/styles"

const Shortener = () => {
  return (
    <>
      <Container>
        <StyledShortener>
          <Input placeholder="Shorten a link here..." />
          <RectButton>Shorten It!</RectButton>
        </StyledShortener>
        <ShortLinkContainer>
          <OriginalLink>
            https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_text-overflow
          </OriginalLink>
          <ShortLink>https://www.w3schools.com/cssref/</ShortLink>
          <CopyButton>Copy</CopyButton>
        </ShortLinkContainer>
      </Container>
    </>
  )
}

export default Shortener
