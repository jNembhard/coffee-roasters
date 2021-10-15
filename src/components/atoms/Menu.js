import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = () => {
  return (
    <>
      <MenuWrap>
        <li>home</li>
        <li>about us</li>
        <li>select a plan</li>
      </MenuWrap>
    </>
  )
}

export default Menu

const MenuWrap = styled.ul`
  list-style-type: none;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.92px;
  display: flex;

  li {
    margin-right: 16px;
    margin-left: 16px;
    cursor: pointer;
    &:hover {
      color: var(--darkGreyBlue);
    }
  }
`
