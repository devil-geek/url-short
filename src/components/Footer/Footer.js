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
          <Link>Link Shortening</Link>
          <Link>Branded Links</Link>
          <Link>Analytics</Link>
        </ItemsContainer>
        <ItemsContainer>
          <h5>Resources</h5>
          <Link>Blog</Link>
          <Link>Developers</Link>
          <Link>Support</Link>
        </ItemsContainer>
        <ItemsContainer>
          <h5>Company</h5>
          <Link>About</Link>
          <Link>Our Team</Link>
          <Link>Careers</Link>
          <Link>Contact</Link>
        </ItemsContainer>
        <SocialIcons>
          <Link>
            <StaticImage
              className="icon"
              src="../../images/icon-facebook.svg"
              alt="facebook"
            />
          </Link>

          <Link>
            <StaticImage
              className="icon"
              src="../../images/icon-twitter.svg"
              alt="twitter"
            />
          </Link>

          <Link>
            <StaticImage
              className="icon"
              src="../../images/icon-pinterest.svg"
              alt="pinterest"
            />
          </Link>
          <Link>
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
