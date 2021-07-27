import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  StyledFooter,
  FooterContainer,
  ItemsContainer,
  SocialIcons,
} from "./styles"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <StaticImage
          className="logo"
          src="../../images/logo.svg"
          alt="Shortly"
        />
        <ItemsContainer>
          <h5>Features</h5>
          <Link to="/">Link Shortening</Link>
          <Link to="/">Branded Links</Link>
          <Link to="/">Analytics</Link>
        </ItemsContainer>
        <ItemsContainer>
          <h5>Resources</h5>
          <Link to="/">Blog</Link>
          <Link to="/">Developers</Link>
          <Link to="/">Support</Link>
        </ItemsContainer>
        <ItemsContainer>
          <h5>Company</h5>
          <Link to="/">About</Link>
          <Link to="/">Our Team</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Contact</Link>
        </ItemsContainer>
        <SocialIcons>
          <Link to="/">
            <StaticImage
              className="icon"
              src="../../images/icon-facebook.svg"
              alt="facebook"
            />
          </Link>

          <Link to="/">
            <StaticImage
              className="icon"
              src="../../images/icon-twitter.svg"
              alt="twitter"
            />
          </Link>

          <Link to="/">
            <StaticImage
              className="icon"
              src="../../images/icon-pinterest.svg"
              alt="pinterest"
            />
          </Link>
          <Link to="/">
            <StaticImage
              className="icon"
              src="../../images/icon-instagram.svg"
              alt="instagram"
            />
          </Link>
        </SocialIcons>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
