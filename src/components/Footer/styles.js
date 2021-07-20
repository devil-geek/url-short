import styled from "@emotion/styled"
import { Container } from "../../shared/styles"

export const StyledFooter = styled.footer`
  background: hsl(260, 8%, 14%);

  h5 {
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  a {
    color: hsl(0, 0%, 75%);
    padding: 0.2rem 0;
    margin: 0.5rem 0;
    cursor: pointer;
    &:hover {
      color: hsl(180, 66%, 49%);
    }
  }
  .logo {
    filter: brightness(0) saturate(100%) invert();
  }
`

export const FooterContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8rem 0;
`

export const ItemsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  a {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .icon {
    &:hover {
      filter: brightness(0) saturate(100%) invert(91%) sepia(6%) saturate(7300%)
        hue-rotate(134deg) brightness(87%) contrast(85%);
    }
  }
`
