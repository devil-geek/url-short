import styled from "@emotion/styled"

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  min-height: 5rem;
  max-width: 144rem;
  margin: 2.5rem auto;
  padding-left: 3rem;
  padding-right: 3rem;

  @media only screen and (max-width: 56.25em) {
    display: none;
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
`
