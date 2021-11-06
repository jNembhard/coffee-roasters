import React, { useState, useRef } from "react"
import styled from "styled-components"
import arrow from "../../images/assets/plan/desktop/icon-arrow.svg"
import PropTypes from "prop-types"

const Accordion = ({ children, dropdownTitle }) => {
  const [active, setActive] = useState("")
  const [height, setHeight] = useState("0px")
  const [rotate, setRotate] = useState("accordion__icon")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "")
    setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    setRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    )
  }

  return (
    <>
      <AccordionWrap>
        <Button className={`${active}`} onClick={toggleAccordion}>
          <DropdownTitle>{dropdownTitle}</DropdownTitle>
          <Arrow src={arrow} className={`${rotate}`} alt="" />
        </Button>
        <Container ref={content} style={{ maxHeight: `${setHeight}` }}>
          <Content>{active && children}</Content>
        </Container>
      </AccordionWrap>
    </>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownTitle: PropTypes.string,
}

Accordion.defaultTypes = {
  dropdownTitle: ``,
}

export default Accordion

const AccordionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 98px;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    width: 730px;
    margin: 12px 0 0;
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 24px;
  display: flex;
  border: none;
  outline: none;
`

const DropdownTitle = styled.h4`
  font-size: 24px;
  line-height: 28px;
  color: var(--grey);
  text-align: left;
  margin-bottom: 0;
  width: 240px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 32px;
    line-height: 48px;
    width: 503px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      font-size: 40px;
      width: 630px;
    }
  }
`

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 40px 0 0;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 760px;
      magin-top: 56px;
    }
  }
`

const Content = styled.div`
  font-size: 14px;
  padding: 0 24px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: flex;
    flex-direction: row;
    padding: 0;
  }
`

const Arrow = styled.img`
  margin: 42px 21px 22px 69px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 28px 0 0;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 60px -20px 0 0;
    }
  }
`
