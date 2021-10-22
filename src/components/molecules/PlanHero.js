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
        media: "(max-width: 768px)",
        image: getImage(
          heroesPlan[0].frontmatter.homeImg.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
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
`

const ImageContainer = styled.div`
  position: relative;
  margin: 0 24px;

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

const PlanHeroContainer = styled.div`
  position: absolute;
  background-color: transparent;
  text-align: center;
  margin: 111px 24px 87px;
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
  color: var(--lightCreamBG);
  background-color: transparent;
`
const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
  width: 279px;
  height: 101px;
  color: var(--lightCreamBG);
  background-color: transparent;
`
