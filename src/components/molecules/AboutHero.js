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
        media: "(max-width: 600px)",
        image: getImage(
          heroesAbout[0].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 1199px)",
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
            className="about-directed"
            formats={["auto", "webp", "avif"]}
            imgStyle={{ borderRadius: "8px" }}
            alt="white cup"
          />
        </ImageContainer>
        <AboutHeroContainer>
          <Title>About Us</Title>
          <Description>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </Description>
        </AboutHeroContainer>
      </AboutHeroWrap>
    </>
  )
}

export default AboutHero

const AboutHeroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
  position: relative;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: unset;
    margin-bottom: 144px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin-bottom: 168px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

  .about-directed {
    height: 400px;

    @media screen and (min-width: 767px) {
      width: 689px;
      /* margin: 0 40px; */

      @media screen and (min-width: 1200px) {
        width: 1140px;

        @media screen and (min-width: 1440px) {
          width: 1280px;
          height: 450px;
          /* margin: 0 80px; */
        }
      }
    }
  }
`

const AboutHeroContainer = styled.div`
  position: absolute;
  background-color: transparent;
  text-align: center;
  max-width: 279px;
  margin: auto;
  top: 111px;
  right: 24px;
  bottom: 87px;
  left: 24px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    top: 118px;
    right: 233px;
    bottom: 118px;
    left: 58px;
    max-width: 398px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      top: 118px;
      right: 600px;
      bottom: 137px;
      left: 85px;
      max-width: 445px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        top: 137px;
        right: 750px;
        bottom: 137px;
        left: 85px;
        max-width: 445px;
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
    line-height: 40px;
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
