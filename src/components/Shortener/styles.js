import styled from "@emotion/styled"
import background from "../../images/bg-boost-desktop.svg"
import { LargeButton, Button } from "../../shared/styles"

export const StyledShortener = styled.div`
  background: hsl(257, 27%, 26%) url(${background});
  width: 100%;
  height: 20rem;
  border-radius: 1.2rem;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 6rem;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    padding: 3rem;
    height: fit-content;
  }
`

export const RectButton = styled(LargeButton)`
  border-radius: 1rem;
  min-height: 7rem;
  @media only screen and (max-width: 56.25em) {
    width: 100%;
    margin: 4rem 0 0;
  }
`

export const Input = styled.input`
  min-height: 7rem;
  font-size: 2.2rem;
  line-height: 2.2rem;
  background: #fff;
  color: hsl(257, 7%, 63%);
  border-radius: 1rem;
  display: flex;
  flex-grow: 1;
  margin-right: 3.5rem;
  padding: 0 3.5rem;
  font-family: "Poppins", sans-serif;
  outline: none;
  border: ${(props) =>
    props.error
      ? "0.4rem solid hsl(0, 87%, 67%);"
      : "0.4rem solid transparent;"};

  &:focus {
    transition: all 0.3s;
    border: 0.4rem solid hsl(180, 66%, 49%);
  }
  @media only screen and (max-width: 56.25em) {
    width: 100%;
    margin-right: 0;
  }
`

export const ShortLinkContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  min-height: 7rem;
  padding: 0 3rem;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  margin: 1.5rem 0 0;

  hr {
    display: none;
  }
  @media only screen and (max-width: 56.25em) {
    flex-wrap: wrap;
    padding: 0;

    hr {
      width: 100%;
      border: 1px solid hsl(218, 31%, 95%);
      display: block;
    }
  }
`

export const OriginalLink = styled.span`
  color: hsl(257, 7%, 63%);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5rem;
  height: 3rem;
  @media only screen and (max-width: 56.25em) {
    flex-basis: 100%;
    padding: 0 3rem;
    margin: 3rem 0 2rem;
  }
`
export const ShortLink = styled.span`
  display: flex;
  justify-content: flex-end;
  color: hsl(180, 66%, 49%);
  height: 3rem;
  @media only screen and (max-width: 56.25em) {
    flex-basis: 100%;
    justify-content: flex-start;
    margin: 2rem 3rem 0;
  }
`

export const CopyButton = styled(Button)`
  border-radius: 0.5rem;
  width: 12rem;
  margin: 1.6rem 0 1.6rem 3rem;
  @media only screen and (max-width: 56.25em) {
    width: 100%;
    margin: 3rem;
  }
`

export const ShortenerWrapper = styled.section`
  background: linear-gradient(
    #fff 0,
    #fff 100px,
    hsl(218, 31%, 95%) 100px,
    hsl(218, 31%, 95%) 100%
  );
`

export const StyledError = styled.p`
  color: hsl(0, 87%, 67%);
  font-style: italic;
  font-size: 1.8rem;
  position: absolute;
  bottom: 2rem;

  @media only screen and (max-width: 56.25em) {
    bottom: 10.5rem;
  }
`
