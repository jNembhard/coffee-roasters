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
        media: "(max-width: 765px)",
        image: getImage(
          commitments[0].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 1199px)",
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
            imgStyle={{ borderRadius: "8px" }}
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: row;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 100px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 165px;
      }
    }
  }
`
const ImageContainer = styled.div`
  margin: 0 24px 48px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 69px 0 40px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 100px 0 0;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 125px 0 0;
      }
    }
  }

  .art-directed {
    width: 327px;
    height: 400px;

    @media screen and (min-width: 767px) {
      width: 281px;
      height: 470px;

      @media screen and (min-width: 1200px) {
        width: 445px;
        height: 520px;
      }
    }
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0 24px 120px;
  max-width: 327px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    margin: -50px 40px 0 0;
    max-width: 339px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      max-width: 500px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        max-width: 540px;
        margin: 10px 40px 0 0;
      }
    }
  }
`

const Title = styled.h1`
  font-size: 32px;
  line-height: 48px;
  color: var(--darkGreyBlue);

  @media ${({ theme }) => theme.breakpoint.laptop} {
    font-size: 40px;
    line-height: 48px;
  }
`

const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: var(--darkGreyBlue);
  height: 375px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      height: unset;
      font-size: 16px;
      line-height: 26px;
    }
  }
`
