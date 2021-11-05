import * as React from "react"
import { Link } from "gatsby"
import Menu from "../atoms/Menu"
import logo from "../../images/assets/shared/desktop/logo.svg"
import styled from "styled-components"
import BurgerNav from "../atoms/BurgerNav"

const Header = () => (
  <NavWrap>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      <Logo src={logo} alt="Logo" />
    </Link>
    <Menu />
    <BurgerNav />
  </NavWrap>
)

export default Header

const Logo = styled.img`
  width: 163px;
  height: 18px;
`

const NavWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 40px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 40px 40px 53px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 43px 80px;
    }
  }
`
