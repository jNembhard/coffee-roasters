import * as React from "react"
import { Link } from "gatsby"
import Menu from "../atoms/Menu"
import logo from "../../images/assets/shared/desktop/logo.svg"
import styled from "styled-components"
import BurgerNav from "../atoms/BurgerNav"

const Header = () => (
  <header>
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
  </header>
)

export default Header

const Logo = styled.img`
  width: 163px;
  height: 18px;
`

// const Nav = styled.nav``

const NavWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 40px;
`
