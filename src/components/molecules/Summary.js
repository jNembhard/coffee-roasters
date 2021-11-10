import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import PlanButton from "../atoms/PlanButton"
import styled from "styled-components"
import OrderModal from "./OrderModal"
import Quotes from "../atoms/Quotes"
import { useSharedSummary } from "../../hooks/useSummary"
import { AnimatePresence } from "framer-motion"

const Summary = () => {
  const { disable } = useSharedSummary()
  const [show, setShow] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { sumNum: { gte: 1, lt: 3 } } }
        sort: { fields: frontmatter___sumNum, order: ASC }
      ) {
        nodes {
          frontmatter {
            summaryImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  `)

  const orders = data.allMarkdownRemark.nodes

  const imageOrders = withArtDirection(
    getImage(orders[1].frontmatter.summaryImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 414px)",
        image: getImage(
          orders[0].frontmatter.summaryImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <SummaryWrap>
        <ImageContainer>
          <GatsbyImage
            image={imageOrders}
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            alt="white cup"
          />
          <OrderContainer>
            <Title>Order Summary</Title>
            <Quotes />
          </OrderContainer>
        </ImageContainer>
        <ButtonWrap>
          <PlanButton disable={disable} onOpen={() => setShow(true)} />
        </ButtonWrap>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {show && <OrderModal onClose={() => setShow(false)} show={show} />}
        </AnimatePresence>
      </SummaryWrap>
    </>
  )
}

export default Summary

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 23px 120px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: var(--grey);
    opacity: 0.7;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 24px 40px 144px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 88px 60px 0 85px;
    }
  }
`

const ButtonWrap = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: 40px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      text-align: right;
      justify-content: flex-end;
      margin: 40px 185px 0 650px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 40px 165px 0 650px;
      }
    }
  }
`

const ImageContainer = styled.div`
  margin: 0 0 56px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 40px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 130px 0 140px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 165px 0 140px;
      }
    }
  }

  .art-directed {
    position: relative;
    width: 328px;
    height: 338px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 689px;
      height: 208px;

      @media screen and (min-width: 1200px) {
        width: 700px;

        @media screen and (min-width: 1440px) {
          width: 730px;
        }
      }
    }
  }
`

const OrderContainer = styled.div`
  position: absolute;
  margin: -320px 25px 32px;
  background-color: transparent;
  width: 290px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: -200px 73px 27px;
    width: unset;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: -200px 180px 0 90px;
      width: 602px;
      height: 114px;
    }
  }

  .quotes {
    color: var(--lightCreamBG);
    margin-right: 10px;
  }
`

const Title = styled.p`
  text-transform: uppercase;
  color: var(--grey);
  background-color: transparent;
`
