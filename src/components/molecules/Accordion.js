import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import arrow from "../../images/assets/plan/desktop/icon-arrow.svg"
import PropTypes from "prop-types"
import { useSharedSummary } from "../../hooks/useSummary"
import { motion, AnimatePresence } from "framer-motion"

const Accordion = ({ children, dropdownTitle, section, buttonID }) => {
  const { accordion, blockAccordion } = useSharedSummary()
  const [active, setActive] = useState("")
  const [rotate, setRotate] = useState("accordion__icon")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "")
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
          <ArrowContainer>
            <Arrow src={arrow} className={`${rotate}`} alt="" />
          </ArrowContainer>
        </Button>
        <AnimatePresence initial={false}>
          {active && (
            <Container
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
              style={accordion && buttonID === 4 ? { display: "none" } : {}}
            >
              <Content>{active && children}</Content>
            </Container>
          )}
        </AnimatePresence>
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 100px 40px 98px;
    width: 730px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 60px 0 88px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 75px 0 88px;
      }
    }
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.4s ease;
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
  border: none;
  outline: none;
  text-align: left;
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
    margin: 0 24px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 35px;
      width: 670px;
      margin-left: -10px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        font-size: 40px;
        width: 680px;
        margin-left: unset;
        margin-right: 25px;
      }
    }
  }
`

const Container = styled(motion.div)`
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

const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 42px 21px 22px 69px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    /* margin: 28px 0 0; */

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 10px 15px 0 40px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 10px -40px 0 10px;
      }
    }
  }
`

const Arrow = styled.img`
  background-color: transparent;

  &:hover {
    filter: invert(94%) sepia(86%) saturate(639%) hue-rotate(121deg)
      brightness(92%) contrast(77%);
  }
`
