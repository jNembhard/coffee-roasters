import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const Order = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { sumNum: { eq: 3 } } }) {
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

  const images = getImage(
    orders[0].frontmatter.summaryImg.childImageSharp.gatsbyImageData
  )

  return (
    <OrderWrap>
      <GatsbyImage
        image={images}
        loading="eager"
        className="art-directed"
        formats={["auto", "webp", "avif"]}
        alt="weird"
      />
      <h1>Order Summary</h1>
      <p>
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </p>
      <Link to="/plan" style={{ textDecoration: `none` }}>
        Close Modal
      </Link>
    </OrderWrap>
  )
}

export default Order

const OrderWrap = styled.div`
  margin: 35px 24px;
  height: 597px;
  /* background-color: black; */
`
