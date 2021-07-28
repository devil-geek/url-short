import styled from "@emotion/styled"

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  min-height: 5rem;
  max-width: 144rem;
  margin: 0 auto;
  padding: 3rem;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 37.5em) {
    position: fixed;
    top: 0;
    padding: 2rem 3rem;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  a {
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    margin: 2rem;
    padding: 0.5rem;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: hsl(260, 8%, 14%);
    }
    &:nth-of-type(1) {
      margin-left: 4rem;
    }
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    a {
      margin: 1.5rem;
      color: #fff;
      &:hover {
        color: hsl(180, 66%, 49%);
      }
      &:nth-of-type(1) {
        margin-left: 2rem;
      }
    }
  }
`

export const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  a {
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    margin: 2rem 3.5rem;
    padding: 0.5rem;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: hsl(260, 8%, 14%);
    }
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    width: 100%;

    a {
      color: #fff;
      &:hover {
        color: hsl(180, 66%, 49%);
      }
    }
    button {
      width: 100%;
    }
  }
`

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  hr {
    display: none;
  }

  @media only screen and (max-width: 37.5em) {
    position: absolute;
    width: 100%;
    background: hsl(257, 27%, 26%);
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    top: -100rem;
    justify-content: center;
    align-items: center;
    width: calc(100% - 6rem);
    padding: 2rem 3rem 3rem;
    margin-top: 0.6rem;
    transition: top 0.5s ease 0s;
    z-index: 9;

    hr {
      width: 100%;
      border: 1px solid hsla(218, 31%, 95%, 0.1);
      display: block;
    }

    &.open {
      top: 8rem;
    }
  }
`

export const MenuButton = styled.div`
  display: none;
  @media only screen and (max-width: 37.5em) {
    position: absolute;
    right: 3rem;
    display: inline-block;
    cursor: pointer;

    .bar1,
    .bar2,
    .bar3 {
      width: 3.2rem;
      height: 0.3rem;
      background-color: #333;
      margin: 6px 0;
      transition: 0.4s;
    }

    &.toggle {
      & .bar1 {
        transform: rotate(-45deg) translate(-3px, 3px);
      }

      & .bar2 {
        opacity: 0;
      }

      & .bar3 {
        transform: rotate(45deg) translate(-8px, -8px);
      }
    }
  }
`
