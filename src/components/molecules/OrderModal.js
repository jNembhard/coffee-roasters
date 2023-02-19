import React, { useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Quotes from "../atoms/Quotes"
import { useSharedSummary } from "../../hooks/useSummary"
import { motion } from "framer-motion"
import Backdrop from "../atoms/Backdrop"

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
  },
  exit: { y: "100vh", opacity: 0 },
}

const OrderModal = ({ onClose, show }) => {
  const { shippingCost } = useSharedSummary()
  const closeOnEsc = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc)
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEsc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  if (!show) return null

  return (
    <Backdrop onClick={onClose}>
      <ModalContent
        onClick={e => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        variants={dropIn}
        exit="exit"
      >
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
        <QuotesTwo />
        <Description>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </Description>
        <CheckoutContainer>
          <BigPrice>{`$${shippingCost()} / mo`}</BigPrice>
          <CheckoutButton onClick={onClose}>
            Checkout
            <span className="price-span">{` - $${shippingCost()}/mo`}</span>
          </CheckoutButton>
        </CheckoutContainer>
      </ModalContent>
    </Backdrop>
  )
}

export default OrderModal

const ModalContent = styled(motion.div)`
  width: 327px;
  height: 597px;
  margin: 0 35px;
  border-radius: 8px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 540px;
    height: 597px;
    margin: 214px 450px;
  }
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

const Title = styled.h2`
  margin: 0;
  position: absolute;
  font-size: 28px;
  line-height: 32px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin-left: 24px;
  margin-top: -55px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: -88px 150px 40px 56px;
    font-size: 40px;
    line-height: 48px;
    width: 380px;
  }
`

const Description = styled.div`
  font-size: 15px;
  line-height: 25px;
  color: var(--darkGreyBlue);
  margin: 0 24px 24px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 56px 47px;
    width: 428px;
  }
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

  .price-span {
    background-color: transparent;
    white-space: pre-wrap;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      display: none;
    }
  }

  &:hover {
    background-color: var(--cyan);
  }
`

const BigPrice = styled.span`
  display: none;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: unset;
    font-family: "Fraunces";
    font-size: 32px;
    line-height: 36px;
    color: var(--darkGreyBlue);
    width: 200px;
    margin: 10px 13px;
  }
`

const CheckoutContainer = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 47px 56px 56px;
    display: flex;
  }
`

const QuotesTwo = styled(Quotes)``
