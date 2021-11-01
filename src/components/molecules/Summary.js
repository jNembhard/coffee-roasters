import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import PlanButton from "../atoms/PlanButton"
import styled from "styled-components"
import { useSharedSummary } from "../../hooks/useSummary"
import OrderModal from "./OrderModal"
import Quotes from "../atoms/Quotes"

const Summary = () => {
  // const { group1, group2, group3, group4, group5 } = useSharedSummary()
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
        <PlanButton onOpen={() => setShow(true)} />
        <OrderModal onClose={() => setShow(false)} show={show} />
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
`

const ImageContainer = styled.div`
  margin: 0 0 56px;
  .art-directed {
    position: relative;
    /* width: 328px; */
    height: 338px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      margin: 0 40px;
    }
  }
`

const OrderContainer = styled.div`
  position: absolute;
  margin: -320px 25px 32px;
  background-color: transparent;

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
