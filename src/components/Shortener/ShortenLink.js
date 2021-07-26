import React, { useState } from "react"
import {
  ShortLinkContainer,
  ShortLink,
  CopyButton,
  OriginalLink,
} from "./styles"

const ShortenLink = ({ shorten }) => {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    setCopied(true)
    navigator.clipboard.writeText(shorten.full_short_link)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <ShortLinkContainer key={shorten.code}>
      <OriginalLink>{shorten.original_link}</OriginalLink>
      <ShortLink>{shorten.full_short_link}</ShortLink>
      <CopyButton disabled={copied} onClick={copyLink}>
        {copied ? "Copied!" : "Copy"}
      </CopyButton>
    </ShortLinkContainer>
  )
}

export default ShortenLink
