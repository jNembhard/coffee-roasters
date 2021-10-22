import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"
import ProcessAtom from "../atoms/ProcessAtom"

const ProcessPlan = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 40, lt: 43 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            planImgBG {
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

  const planbgs = data.allMarkdownRemark.nodes

  const imagesPlanBG = withArtDirection(
    getImage(planbgs[2].frontmatter.planImgBG.childImageSharp.gatsbyImageData),
    [
      {
        media: "(max-width: 768px)",
        image: getImage(
          planbgs[0].frontmatter.planImgBG.childImageSharp.gatsbyImageData
        ),
      },
      {
        media: "(max-width: 992px)",
        image: getImage(
          planbgs[1].frontmatter.planImgBG.childImageSharp.gatsbyImageData
        ),
      },
    ]
  )

  return (
    <Wrapper>
      <ProcessContainer>
        <ImageWrap>
          <GatsbyImage
            image={imagesPlanBG}
            className="art"
            formats={["auto", "webp", "avif"]}
            alt="bg"
          />
        </ImageWrap>
        <AtomContainer>
          <ProcessAtom />
        </AtomContainer>
      </ProcessContainer>
    </Wrapper>
  )
}

export default ProcessPlan

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: transparent;
`

const ProcessContainer = styled.div``

const ImageWrap = styled.div`
  position: relative;

  .art {
    z-index: 1;
    width: 375px;
    height: 1068px;
    border-radius: 8px;

    @media screen and (min-width: 767px) {
      width: 768px;
      height: 640px;

      @media screen and (min-width: 992px) {
        width: 1280px;
        height: 653px;
      }
    }
  }
`

const AtomContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-color: transparent;
  left: 24px;
  margin: -1080px 0;

  h1 {
    margin-top: 80px;
  }

  h2 {
    color: var(--lightCreamBG);
  }

  p {
    color: var(--lightCreamBG);
  }
`
