import React from "react"
import PlanButton from "../atoms/PlanButton"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"

const HeroHome = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { lt: 8, gte: 5 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            homeImg {
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

  const heroes = data.allMarkdownRemark.nodes

  const images = withArtDirection(
    getImage(heroes[2].frontmatter.homeImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 600px)",
        image: getImage(
          heroes[0].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 1199px)",
        image: getImage(
          heroes[1].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <HeroWrap>
        <ImageWrap>
          <GatsbyImage
            image={images}
            loading="eager"
            className="hero-directed"
            formats={["auto", "webp", "avif"]}
            alt="coffeepress"
          />
        </ImageWrap>
        <HeroContainer>
          <Title>Great coffee made simple.</Title>
          <Description>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Description>
          <Link to="/plan" style={{ textDecoration: `none` }}>
            <PlanButton />
          </Link>
        </HeroContainer>
      </HeroWrap>
    </>
  )
}

export default HeroHome

const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-bottom: 144px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin-bottom: 136px;
    }
  }
`

const ImageWrap = styled.div`
  position: relative;
  margin: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 40px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 60px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 80px;
      }
    }
  }

  .hero-directed {
    height: 500px;
    border-radius: 15px;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      width: 689px;

      @media ${({ theme }) => theme.breakpoint.laptop} {
        width: 1140px;

        @media ${({ theme }) => theme.breakpoint.desktop} {
          width: 1280px;
          height: 600px;
        }
      }
    }
  }
`

const HeroContainer = styled.div`
  position: absolute;
  background-color: transparent;
  text-align: center;
  max-width: 327px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    margin: 104px 233px 104px 58px;
    max-width: 398px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      max-width: 493px;
      margin: 117px 500px 116px 80px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 117px 702px 116px 165px;
      }
    }
  }
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin: 100px 24px 24px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 24px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 72px;
      line-height: 72px;
    }
  }
`

const Description = styled.p`
  color: var(--lightCreamBG);
  background-color: transparent;
  margin: 0 24px 39px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 15px;
    line-height: 25px;
    margin: 0 0 39px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 16px;
      line-height: 26px;
    }
  }
`
