import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const navLinks = [
  { name: "home", url: "/" },
  { name: "about", url: "/about" },
  { name: "create your plan", url: "/plan" },
]

const Menu = () => {
  return (
    <>
      <MenuWrapUL>
        {navLinks.map(({ name, url }, index) => (
          <li key={index}>
            <Links to={url}>{name}</Links>
          </li>
        ))}
      </MenuWrapUL>
    </>
  )
}

export default Menu

const MenuWrapUL = styled.ul`
  display: none;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: unset;
    list-style-type: none;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.92px;
    display: flex;

    li {
      margin-right: 16px;
      margin-left: 16px;
    }
  }
`

const ClickWrap = styled.div``

const Links = styled(Link)`
  display: none;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: unset;
    color: var(--grey);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: var(--darkGreyBlue);
    }
  }
`
