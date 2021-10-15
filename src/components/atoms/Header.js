import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../atoms/Menu"
import logo from "../../images/assets/shared/desktop/logo.svg"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <header>
    <NavWrap>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Logo src={logo} alt="Logo" />
        {/* <h1 style={{ margin: 0 }}>{siteTitle}</h1> */}
      </Link>
      <Menu />
    </NavWrap>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Logo = styled.img`
  width: 163px;
  height: 18px;
`

const Nav = styled.nav``

const NavWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
