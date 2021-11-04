import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"

const Uncompromising = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 17, lt: 23 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            commitImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            number
          }
        }
      }
    }
  `)

  const grounds = data.allMarkdownRemark.nodes

  const foregroundImages = withArtDirection(
    getImage(grounds[2].frontmatter.commitImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 768px)",
        image: getImage(
          grounds[0].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
        image: getImage(
          grounds[1].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  const backgroundImages = withArtDirection(
    getImage(grounds[5].frontmatter.commitImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 765px)",
        image: getImage(
          grounds[3].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
        image: getImage(
          grounds[4].frontmatter.commitImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <UncompromisingWrap>
        <BackgroundImage>
          <GatsbyImage
            image={backgroundImages}
            loading="eager"
            className="bg-directed"
            formats={["auto", "webp", "avif"]}
            alt="BG Slate"
          />
        </BackgroundImage>
        <Container>
          <ForegroundImage>
            <GatsbyImage
              image={foregroundImages}
              loading="eager"
              className="fg-directed"
              formats={["auto", "webp", "avif"]}
              alt="quality cup"
            />
          </ForegroundImage>
          <Title>
            Uncompromising <br className="break" />
            quality
          </Title>
          <Description>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </Description>
        </Container>
      </UncompromisingWrap>
    </>
  )
}

export default Uncompromising

const UncompromisingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 90px 24px 120px;
`

const ForegroundImage = styled.div`
  position: absolute;
  background-color: transparent;
  margin-top: -200px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: -260px;
  }

  .fg-directed {
    width: 279px;
    height: 156px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 573px;
      height: 320px;

      @media screen and (min-width: 992px) {
        width: 445px;
        height: 474px;
      }
    }
  }
`
const BackgroundImage = styled.div`
  position: relative;

  .bg-directed {
    width: 327px;
    height: 509px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 688px;
      height: 488px;
      margin: 160px 40px 0;

      @media screen and (min-width: 992px) {
        width: 1280px;
        height: 474px;
      }
    }
  }
`

const Container = styled.div`
  position: absolute;
  text-align: center;
  background-color: transparent;
  margin: 142px 24px 61px;
  width: 279px;
  height: 226px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 160px 74px 67px;
    width: 540px;
    height: 197px;
  }
`

const Title = styled.h1`
  font-size: 28px;
  line-height: 28px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    width: 420px;
    margin: 110px 64.5px 24px;

    .break {
      display: none;
    }
  }
`
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: unset;
    height: unset;
  }
`
