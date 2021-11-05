import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import facebook from "../../images/assets/shared/desktop/icon-facebook.svg"
import instagram from "../../images/assets/shared/desktop/icon-instagram.svg"
import twitter from "../../images/assets/shared/desktop/icon-twitter.svg"
import leaflogo from "../../images/assets/shared/desktop/leaf-logo.svg"

const navLinks = [
  { name: "home", url: "/" },
  { name: "about us", url: "/about" },
  { name: "create your plan", url: "/plan" },
]

const socials = [
  { id: 1, name: "facebook", media: facebook },
  { id: 2, name: "twitter", media: twitter },
  { id: 3, name: "instagram", media: instagram },
]

const Footer = ({ siteTitle }) => (
  <FooterWrap>
    <Container>
      <Title>
        <Links to="/">
          <Leaf src={leaflogo} alt="" />
          {siteTitle}
        </Links>
      </Title>
      <NavLinkUl>
        {navLinks.map(({ name, url }, index) => (
          <List key={index}>
            <LinkList to={url}>{name}</LinkList>
          </List>
        ))}
      </NavLinkUl>
      <SocialContainer>
        {socials.map(social => (
          <Socials
            key={social.id}
            src={social.media}
            width="24px"
            height="24px"
            alt={social.name}
          />
        ))}
      </SocialContainer>
    </Container>
  </FooterWrap>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 120px 24px 72px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 144px 40px 72px;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      margin: 168px 80px 88px;
    }
  }
`

const Container = styled.div`
  width: 327px;
  height: 346px;
  background-color: var(--darkGreyBlue);

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 688px;
    height: 270px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 1280px;
      height: 120px;
      display: inline-flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const Title = styled.h3`
  font-size: 24px;
  background-color: transparent;
  margin: 54px 54px 50px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 50px 54px 32px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 43px 0 47px 50px;
    }
  }
`

const Links = styled(Link)`
  background-color: inherit;
  color: var(--lightCreamBG);
  text-decoration: none;
`

const Leaf = styled.img`
  background-color: transparent;
  margin-right: 7.38px;
`

const NavLinkUl = styled.ul`
  list-style-type: none;
  background-color: transparent;
  margin: 0 28px 48px;
  width: 192px;
  height: 93px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: unset;
    height: unset;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 190px 65px 215px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 293px;
      height: 15px;
      margin: 53.44px 373px 51px 0;
    }
  }
`

const List = styled.li`
  background-color: transparent;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.92px;
  margin: 24px 0;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: unset;
    margin-left: -30px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: unset;
    }
  }
`

const LinkList = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  color: var(--grey);
  font-weight: var(--barlowBold);
  text-transform: uppercase;

  &:hover {
    color: var(--lightCreamBG);
  }
`

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 120px;
  height: 24px;
  margin: 0 105px;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    margin: 47px 85px 0 0;
  }
`
const Socials = styled.img`
  background-color: transparent;
  cursor: pointer;
  &:hover {
    filter: invert(18%) sepia(47%) saturate(269%) hue-rotate(326deg)
      brightness(101%) contrast(98%);
  }
`
