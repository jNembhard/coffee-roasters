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

const Hamburger = styled.img`
  cursor: pointer;
`

const HamburgerWrap = styled.div`
  /* position: absolute; */
`

const CoffeeSideBar = styled.div`
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-family: "Fraunces";
  font-size: 24px;
  line-height: 3.2;
  background: linear-gradient(
    180deg,
    rgba(254, 252, 247, 1) 25%,
    rgba(254, 247, 247, 0) 80%
  );
  /* transform: ${props =>
    props.modalOpen ? "translateY(0)" : "translateY(100%)"}; */
  z-index: ${props => (props.modalOpen ? "2" : "-1")};
  transition: transform 0.3s ease-in-out;

  ul {
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }
`

const BurgerNavWrap = styled.div`
  position: releative;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
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
