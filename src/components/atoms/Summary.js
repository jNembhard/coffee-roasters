import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import PlanButton from "../atoms/PlanButton"
import styled from "styled-components"
import { useSharedSummary } from "../../hooks/useSummary"

const Summary = () => {
  const { group1, group2, group3, group4, group5 } = useSharedSummary()

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
            <Description>
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
            </Description>
          </OrderContainer>
        </ImageContainer>
        <Link to="/order" style={{ textDecoration: `none` }}>
          <PlanButton />
        </Link>
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
