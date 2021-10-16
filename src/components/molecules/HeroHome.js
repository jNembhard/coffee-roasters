import React from "react"
import PlanButton from "../atoms/PlanButton"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import HomeDesktopBanner from "../../images/assets/home/desktop/image-hero-coffeepress.jpg"
import HomeTabletBanner from "../../images/assets/home/tablet/image-hero-coffeepress.jpg"
import mobilecoffeepress from "../../images/assets/home/mobile/image-hero-coffeepress.jpg"
import styled from "styled-components"

const HeroHome = () => {
  const isScreenSize767 = useMediaQuery("(min-width: 767px)")
  const isScreenSize992 = useMediaQuery("(min-width: 992px)")

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
                gatsbyImageData
              }
            }
            number
          }
        }
      }
    }
  `)

  const heroes = data.allMarkdownRemark.nodes
  console.log(
    getImage(heroes[2].frontmatter.homeImg.childImageSharp.gatsbyImageData)
  )

  const images = withArtDirection(
    getImage(heroes[0].frontmatter.homeImg.childImageSharp.gatsbyImageData),
    [
      {
        media: "(min-width: 767px)",
        image: getImage(
          heroes[1].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(min-width: 992px)",
        image: getImage(
          heroes[2].frontmatter.homeImg.childImageSharp.gatsbyImageData
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
            quality={100}
            className="art-directed"
            formats={["auto", "webp", "avif"]}
            alt="coffeepress"
            // style={{ marginBottom: `1.45rem` }}
          />
        </ImageWrap>
        <HeroContainer>
          <Title>Great coffee made simple.</Title>
          <Description>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Description>
          <PlanButton />
        </HeroContainer>
      </HeroWrap>
    </>
  )
}

export default HeroHome

const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageWrap = styled.div`
  .art-directed {
    width: 327px;
    height: 500px;
  }
  /* border: 1px solid red; */

  @media screen and (min-width: 767px) {
    .art-directed {
      width: 689px;
    }

    @media screen and (min-width: 992px) {
      .art-directed {
        width: 1280px;
        height: 600px;
      }
    }
  }
`

const HeroContainer = styled.div`
  text-align: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
`

const Description = styled.p``
