import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"

const PlanHero = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 23, lt: 26 } } }
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

  const heroesPlan = data.allMarkdownRemark.nodes

  const imagesPlan = withArtDirection(
    getImage(heroesPlan[2].frontmatter.homeImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 600px)",
        image: getImage(
          heroesPlan[0].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 1199px)",
        image: getImage(
          heroesPlan[1].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <PlanHeroWrap>
        <ImageContainer>
          <GatsbyImage
            image={imagesPlan}
            loading="eager"
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            imgStyle={{ borderRadius: "8px" }}
            alt="white cup"
          />
        </ImageContainer>
        <PlanHeroContainer>
          <Title>Create a Plan</Title>
          <Description>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Description>
        </PlanHeroContainer>
      </PlanHeroWrap>
    </>
  )
}

export default PlanHero

const PlanHeroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
  position: relative;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    align-items: unset;
    margin-bottom: 144px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin-bottom: 168px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  margin: 0 24px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 40px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 60px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 80px;
      }
    }
  }

  .art-directed {
    height: 400px;

    @media screen and (min-width: 767px) {
      width: 689px;

      @media screen and (min-width: 1200px) {
        width: 1140px;

        @media screen and (min-width: 1440px) {
          width: 1280px;
          height: 450px;
        }
      }
    }
  }
`

const PlanHeroContainer = styled.div`
  position: absolute;
  background-color: transparent;
  text-align: center;
  top: 111px;
  right: 24px;
  bottom: 87px;
  left: 24px;
  margin: auto;
  max-width: 279px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    top: 88px;
    right: 233px;
    bottom: 126px;
    left: 58px;
    max-width: 398px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      top: 80px;
      right: 680px;
      bottom: 134px;
      left: 125px;
      max-width: 486px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        top: 100px;
        right: 709px;
        bottom: 134px;
        left: 85px;
      }
    }
  }
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 48px;
    line-height: 48px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 62px;
      line-height: 62px;
      width: 500px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        font-size: 72px;
        line-height: 72px;
      }
    }
  }
`
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  height: 101px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    height: 147px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      font-size: 16px;
      line-height: 26px;
    }
  }
`
