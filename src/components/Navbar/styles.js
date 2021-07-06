import styled from "@emotion/styled"

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  min-height: 5rem;
  max-width: 144rem;
  margin: 2.5rem auto;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  a {
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    padding: 2rem 0 2rem 4rem;
    text-decoration: none;
    &:hover {
      color: hsl(0, 0%, 75%);
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
    padding: 2rem;
    text-decoration: none;
    &:hover {
      color: hsl(0, 0%, 75%);
    }
  }
`
