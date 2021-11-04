import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"

const AboutHero = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { lt: 14, gte: 11 } } }
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

  const heroesAbout = data.allMarkdownRemark.nodes

  const imagesAbout = withArtDirection(
    getImage(
      heroesAbout[2].frontmatter.homeImg.childImageSharp.gatsbyImageData
    ),
    [
      {
        media: "(max-width: 765px)",
        image: getImage(
          heroesAbout[0].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
        image: getImage(
          heroesAbout[1].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <>
      <AboutHeroWrap>
        <ImageContainer>
          <GatsbyImage
            image={imagesAbout}
            loading="eager"
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            alt="white cup"
          />
        </ImageContainer>
        <AboutHeroContainer>
          <Title>About Us</Title>
          <DesContainer>
            <Description>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </Description>
          </DesContainer>
        </AboutHeroContainer>
      </AboutHeroWrap>
    </>
  )
}

export default AboutHero

const AboutHeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    align-items: unset;
    margin-bottom: 144px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  margin: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 40px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 0 80px;
    }
  }

  .art-directed {
    width: 327px;
    height: 400px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 689px;
      height: 400px;

      @media screen and (min-width: 992px) {
        width: 1280px;
        height: 450px;
      }
    }
  }
`

const AboutHeroContainer = styled.div`
  position: absolute;
  background-color: transparent;
  text-align: center;
  margin: 111px 24px 87px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    margin: 118px 233px 118px 56px;
  }
`

const Title = styled.h1`
  font-size: 28px;
  line-height: 28px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 32px;
    line-height: 40px;
  }
`

const DesContainer = styled.p`
  max-width: 279px;
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 398px;
  }
`
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  height: 150px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    height: 164px;
  }
`
