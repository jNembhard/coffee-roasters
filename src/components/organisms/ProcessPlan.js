import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import styled from "styled-components"
import ProcessAtom from "../atoms/ProcessAtom"

const ProcessPlan = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 41, lt: 44 } } }
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
        media: "(max-width: 765px)",
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
          <Line />
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

const Line = styled.hr`
  display: none;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: unset;
    position: absolute;
    border: 0;
    width: 445px;
    height: 2px;
    background: var(--paleOrange);
    background-image: var(--paleOrange);
    margin: 15px 246px 62px 18px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 760px;
      margin-top: 13px;
      margin-left: 65px;
    }
  }
`

const ImageWrap = styled.div`
  position: relative;

  .art {
    z-index: 0;
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: flex;
    flex-direction: row;
    margin: -550px 40px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: -550px 150px 99px 85px;
    }
  }

  .circles {
    @media ${({ theme }) => theme.breakpoint.tablet} {
      background-color: transparent;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin-top: -105px;
      }
    }
  }

  h1 {
    margin-top: 80px;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      margin-top: unset;
    }
  }

  h2 {
    color: var(--lightCreamBG);
  }

  p {
    color: var(--lightCreamBG);
  }
`
