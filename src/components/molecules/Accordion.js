import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import arrow from "../../images/assets/plan/desktop/icon-arrow.svg"
import PropTypes from "prop-types"
import { useSharedSummary } from "../../hooks/useSummary"

const Accordion = ({ children, dropdownTitle, section, buttonID }) => {
  const { accordion, blockAccordion } = useSharedSummary()
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

  useEffect(() => {
    blockAccordion()
  })

  return (
    <>
      <AccordionWrap id={section}>
        <Button
          className={`${active}`}
          disabled={buttonID === 4 ? accordion : false}
          onClick={toggleAccordion}
        >
          <DropdownTitle
            style={
              accordion && buttonID === 4
                ? { color: "#83888f", opacity: 0.3 }
                : {}
            }
          >
            {dropdownTitle}
          </DropdownTitle>
          <Arrow src={arrow} className={`${rotate}`} alt="" />
        </Button>
        <Container
          ref={content}
          style={
            accordion && buttonID === 4
              ? { display: "none" }
              : { maxHeight: `${setHeight}` }
          }
        >
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

  @media ${({ theme }) => theme.breakpoint.laptop} {
    width: 730px;
    margin: 12px 0 0;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 730px;
      margin: 12px 0 0;
    }
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  &.deactivate {
    h4 {
      color: red;
      opacity: 0.4;
    }
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

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 35px;
      width: 600px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        font-size: 40px;
        width: 630px;
      }
    }
  }
`

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 40px 0 0;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      width: 700px;
      magin-top: 56px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        width: 760px;
        magin-top: 56px;
      }
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
  background-color: transparent;

  &:hover {
    filter: invert(94%) sepia(86%) saturate(639%) hue-rotate(121deg)
      brightness(92%) contrast(77%);
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 28px 0 0;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 60px 30px 0 0;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 60px -20px 0 0;
      }
    }
  }
`
