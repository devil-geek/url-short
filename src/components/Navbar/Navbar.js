import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StyledNavbar, Menu, Sign } from "./styles"
import { Button } from "../../shared/styles"

const Navbar = () => {
  return (
    <StyledNavbar>
      <Menu>
        <StaticImage src="../../images/logo.svg" alt="Shortly" />
        <Link to="/">Features </Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Resources</Link>
      </Menu>
      <Sign>
        <Link to="/">Login</Link>
        <Button>Sign Up</Button>
      </Sign>
    </StyledNavbar>
  )
}

export default Navbar
