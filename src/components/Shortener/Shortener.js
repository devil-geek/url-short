import React, { useCallback, useEffect, useState } from "react"
import { Container } from "../../shared/styles"
import ShortenLink from "./ShortenLink"
import {
  StyledShortener,
  RectButton,
  Input,
  ShortenerWrapper,
  StyledError,
} from "./styles"

const STORE_KEY = "shortly"

const Shortener = () => {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [shortenLinks, setShortenLinks] = useState([])
  const [error, setError] = useState("")

  const sendUrl = useCallback(async () => {
    if (!url) {
      setError("Please add a link")
      return
    }
    setLoading(true)
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const responseData = await response.json()
    setLoading(false)
    if (!responseData.ok) {
      setError(responseData.error)
    } else {
      const newShortenLinks = [responseData.result, ...shortenLinks.slice(0, 2)]
      setShortenLinks(newShortenLinks)
      setUrl("")
      localStorage.setItem(STORE_KEY, JSON.stringify(newShortenLinks))
    }
  }, [url, shortenLinks])

  const _onChange = useCallback((e) => {
    setError("")
    setUrl(e.target.value)
  }, [])

  useEffect(() => {
    if (localStorage.getItem(STORE_KEY)) {
      setShortenLinks(JSON.parse(localStorage.getItem(STORE_KEY)))
    }
  }, [])

  return (
    <ShortenerWrapper>
      <Container>
        <StyledShortener>
          <Input
            placeholder="Shorten a link here..."
            value={url}
            onChange={_onChange}
            error={error}
            readOnly={loading}
          />
          <StyledError>{error}</StyledError>
          <RectButton
            onClick={() => {
              sendUrl()
            }}
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </RectButton>
        </StyledShortener>

        {shortenLinks?.map((shorten) => {
          return <ShortenLink key={shorten.code} shorten={shorten} />
        })}
      </Container>
    </ShortenerWrapper>
  )
}

export default Shortener
