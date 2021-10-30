import React, { useContext, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import PlanButton from "../atoms/PlanButton"
import styled from "styled-components"
import options from "../../data/plan-page/plantab/options"
import { PlanContext } from "../../contexts/PlanContext"

const Summary = () => {
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

  const { dispatch } = useContext(PlanContext)
  const [title, setTitle] = useState("_____")

  const initialState = {
    drink: null,
    type: null,
    quantity: null,
    grind: null,
    delivery: null,
  }

  const handle = () => {
    counter.current = counter.current + 1
  }

  const handleChange = e => {
    console.log(title)
    dispatch({ type: "ADD_DRINK", drink: { title } })
  }

  const [orderData, setOrderData] = useState(initialState)

  // const drink = orderData.drink === null ? "_____" : orderData.drink
  // const type = orderData.type === null ? "_____" : orderData.type
  // const quantity = orderData.quantity === null ? "_____" : orderData.quantity
  // const grind = orderData.grind === null ? "_____" : orderData.grind
  // const delivery = orderData.delivery === null ? "_____" : orderData.delivery

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
            <Description>
              “I drink coffee <span>_____</span>, with a <span>_____</span>
              type of bean. <span>_____</span> ground ala
              <span>______</span>, sent to me <span>______</span>.”
            </Description>
          </OrderContainer>
        </ImageContainer>
        <PlanButton />
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
  /* border: 1px solid red; */
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
`

const Title = styled.p`
  text-transform: uppercase;
  color: var(--grey);
  background-color: transparent;
`

const Description = styled.h2`
  font-size: 24px;
  line-height: 40px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin-right: 10px;

  span {
    color: var(--darkCyan);
    background-color: transparent;
  }
`
