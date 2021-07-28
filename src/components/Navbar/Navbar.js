import { Link } from "gatsby"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StyledNavbar, Menu, Sign, NavWrapper, MenuButton } from "./styles"
import { Button } from "../../shared/styles"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledNavbar>
      <StaticImage src="../../images/logo.svg" alt="Shortly" />
      <NavWrapper className={menuOpen ? "open" : ""}>
        <Menu>
          <Link to="/">Features </Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Resources</Link>
        </Menu>
        <hr />
        <Sign>
          <Link to="/">Login</Link>
          <Button>Sign Up</Button>
        </Sign>
      </NavWrapper>
      <MenuButton
        className={menuOpen ? "toggle" : ""}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </MenuButton>
    </StyledNavbar>
  )
}

export default Navbar
