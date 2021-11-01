import React, { useEffect } from "react"
import { useSharedSummary } from "../../hooks/useSummary"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OrderModal = ({ onClose, show }) => {
  const closeOnEsc = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose()
    }
  }

  // useEffect(() => {
  //   document.body.addEventListener("keydown", closeOnEsc)
  //   return function cleanup() {
  //     document.body.removeEventListener("keydown", closeOnEsc)
  //   }
  // }, [])

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

  const { group1, group2, group3, group4, group5 } = useSharedSummary()
  if (!show) return null

  return (
    <ModalWrap onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <GatsbyImage
            image={images}
            loading="eager"
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
          <Title>Order Summary</Title>
        </ModalHeader>
        <Quote>
          “I drink coffee{" "}
          <span className="special">
            {group1 === "Capsules" ? "using " : "as "}
          </span>
          <span>{group1 ? group1 : "_____"}</span>, with a{" "}
          <span>{group2 ? group2 : "_____"}</span> type of bean.{" "}
          <span>{group3 ? group3 : "_____"}</span>{" "}
          {group1 !== "Capsules" && (
            <span className="special">ground ala </span>
          )}
          {group1 !== "Capsules" && (
            <span>{group4 ? ` ${group4}` : ` _____`}</span>
          )}
          , sent to me <span>{group5 ? group5 : "_____"}</span>.”
        </Quote>
        <Description>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </Description>
        <CheckoutButton onClick={onClose}>Checkout - $14.00/mo</CheckoutButton>
      </ModalContent>
    </ModalWrap>
  )
}

export default OrderModal

const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`
const ModalContent = styled.div`
  width: 327px;
  height: 597px;
  margin: 0 35px;
  border-radius: 8px;
`

const ModalHeader = styled.div`
  text-align: left;
  border-radius: 8px 8px 0 0;
  background-color: transparent;

  .art-directed {
    position: relative;
    background-color: transparent;
    border-radius: 8px 8px 0 0;
  }
`

const Quote = styled.h2`
  color: var(--grey);
  margin: 40px 24px 0;
  font-size: 24px;
  line-height: 40px;

  .special {
    color: inherit;
    text-transform: none;
  }

  span {
    color: var(--darkCyan);
    background-color: transparent;
    text-transform: capitalize;
  }
`

const Title = styled.h2`
  margin: 0;
  position: absolute;
  font-size: 28px;
  line-height: 32px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin-left: 24px;
  margin-top: -55px;
`
const Description = styled.div`
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
