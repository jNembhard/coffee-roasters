import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"

const Commitment = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 14, lt: 17 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            commitImg {
              childImageSharp {
                gatsbyImageData
              }
            }
            number
          }
        }
      }
    }
  `)

  const commitments = data.allMarkdownRemark.nodes

  const imageCommits = withArtDirection(
    getImage(
      commitments[2].frontmatter.commitImg.childImageSharp.gatsbyImageData
    ),
    [
      {
        media: "(max-width: 768px)",
        image: getImage(
          commitments[0].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
        image: getImage(
          commitments[1].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <CommitmentWrap>
        <ImageContainer>
          <GatsbyImage
            image={imageCommits}
            loading="eager"
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            alt="white cup"
          />
        </ImageContainer>
        <Container>
          <Title>Our commitment</Title>
          <Description>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </Description>
        </Container>
      </CommitmentWrap>
    </>
  )
}

export default Commitment

const CommitmentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.div`
  margin: 0 24px 48px;

  .art-directed {
    width: 327px;
    height: 400px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 281px;
      height: 470px;

      @media screen and (min-width: 992px) {
        width: 445px;
        height: 520px;
      }
    }
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0 24px 120px;
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 48px;
  color: var(--darkGreyBlue);
`

const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: var(--darkGreyBlue);
  width: 327px;
  height: 375px;
`
