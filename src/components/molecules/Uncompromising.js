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
            style={{ borderRadius: "8px" }}
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
              style={{ borderRadius: "8px" }}
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 144px 40px 144px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 168px 80px;
    }
  }
`

const ForegroundImage = styled.div`
  position: absolute;
  background-color: transparent;
  margin-top: -200px;
  border-radius: 8px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: -260px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: -198px 165px 88px 580px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: -198px 165px 88px 660px;
      }
    }
  }

  .fg-directed {
    width: 279px;
    height: 156px;

    @media screen and (min-width: 767px) {
      width: 573px;
      height: 320px;

      @media screen and (min-width: 1200px) {
        width: 420px;
        height: 454px;

        @media screen and (min-width: 1440px) {
          width: 445px;
          height: 474px;
        }
      }
    }
  }
`
const BackgroundImage = styled.div`
  position: relative;
  border-radius: 8px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 160px 40px 0;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 88px 80px 0;
    }
  }

  .bg-directed {
    width: 327px;
    height: 509px;

    @media screen and (min-width: 767px) {
      width: 688px;
      height: 488px;

      @media screen and (min-width: 1200px) {
        width: 1140px;
        height: 454px;

        @media screen and (min-width: 1440px) {
          width: 1280px;
          height: 474px;
        }
      }
    }
  }
`

const Container = styled.div`
  position: absolute;
  text-align: center;
  background-color: transparent;
  top: 0;
  right: 22px;
  bottom: 64px;
  left: 18px;
  margin: auto;
  width: 279px;
  height: 226px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    top: 160px;
    right: 84px;
    bottom: 67px;
    left: 54px;
    width: 540px;
    height: 197px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      top: 88px;
      right: 500px;
      bottom: 88px;
      left: 20px;
      text-align: left;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        top: 88px;
        right: 665px;
        bottom: 88px;
        left: 85px;
      }
    }
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
    width: 420px;
    margin: 110px 64.5px 24px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 40px;
      line-height: 48px;
      width: 514px;
      margin: 0;
    }
  }

  .break {
    @media ${({ theme }) => theme.breakpoint.tablet} {
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

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 16px;
    }
  }
`
