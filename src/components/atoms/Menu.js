import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const navLinks = [
  { name: "home", url: "/" },
  { name: "about us", url: "/about" },
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
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.92px;

    li {
      font-weight: var(--barlowBold);
      margin: 0 16px;
    }
  }
`

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
