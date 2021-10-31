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
      <TopContainer>
        <GatsbyImage
          image={images}
          loading="eager"
          className="art-directed"
          formats={["auto", "webp", "avif"]}
          alt=""
        />
        <Title>Order Summary</Title>
      </TopContainer>
      <Quote>
        “I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala
        Cafetiére, sent to me Every Week.”
      </Quote>
      <Description>
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </Description>
      <Linked to="/plan" style={{ textDecoration: `none` }}>
        <CheckoutButton>Checkout - $14.00/mo</CheckoutButton>
      </Linked>
    </OrderWrap>
  )
}

export default Order

const OrderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 24px 0;
  height: 597px;
  border: 1px solid red;
  border-radius: 8px;
  /* background-color: black; */
`

const TopContainer = styled.div`
  text-align: left;

  .art-directed {
    position: relative;
  }
`

const Title = styled.h2`
  position: absolute;
  font-size: 28px;
  line-height: 32px;
  color: var(--lightCreamBG);
  color: black;
  margin-left: 24px;
  margin-top: -55px;
  color: var(--lightCreamBG);
  background-color: transparent;
`

const Quote = styled.h2`
  color: var(--grey);
  margin: 40px 24px 0;
  font-size: 24px;
  line-height: 40px;
`
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: var(--darkGreyBlue);
  margin: 0 24px 24px;
`

const CheckoutButton = styled.button`
  font-family: "Fraunces";
  font-size: 18px;
  line-height: 25px;
  width: 279px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--lightCreamBG);
  background-color: var(--darkCyan);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 24px 24px;

  &:hover {
    background-color: var(--cyan);
  }
`

const Linked = styled(Link)`
  background-color: transparent;
`
