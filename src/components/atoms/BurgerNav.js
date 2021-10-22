import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import openIcon from "../../images/assets/shared/mobile/icon-hamburger.svg"
import closeIcon from "../../images/assets/shared/mobile/icon-close.svg"

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Create Your Plan", url: "/plan" },
]

const BurgerNav = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = () => setModalOpen(!modalOpen)
  const getImageName = () => (modalOpen ? closeIcon : openIcon)

  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = modalOpen ? "hidden" : "unset"
  })

  return (
    <BurgerNavWrap>
      <HamburgerWrap>
        <Hamburger onClick={() => toggle()} src={getImageName()} alt="" />
      </HamburgerWrap>
      <CoffeeSideBar modalOpen={modalOpen}>
        <ul>
          {navLinks.map(({ name, url }, index) => (
            <li key={index}>
              <Links onClick={() => toggle()} to={url}>
                {name}
              </Links>
            </li>
          ))}
        </ul>
      </CoffeeSideBar>
    </BurgerNavWrap>
  )
}

export default BurgerNav

const BurgerNavWrap = styled.div`
  position: releative;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`

const HamburgerWrap = styled.div``

const Hamburger = styled.img`
  cursor: pointer;
`

const CoffeeSideBar = styled.div`
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 25px;
  left: 0;
  width: 95%;
  text-align: center;
  font-family: "Fraunces";
  font-size: 24px;
  line-height: 3.2;
  background: linear-gradient(var(--lightCreamBG) 45%, transparent);
  transform: ${props =>
    props.modalOpen ? "translateY(0)" : "translateY(-110%)"};
  z-index: 2;
  transition: transform 0.2s ease-in-out;
  text-align: center;

  ul {
    list-style-type: none;
  }
`

const Links = styled(Link)`
  display: unset;
  text-decoration: none;
  cursor: pointer;
  color: var(--darkGreyBlue);

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`
