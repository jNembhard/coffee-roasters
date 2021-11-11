import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import sanitizeHtml from "sanitize-html"

const Coffees = () => {
  const data = useStaticQuery(graphql`
    query CoffeesPage {
      coffees: allMarkdownRemark(
        filter: { frontmatter: { number: { lt: 5, gte: 1 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            coffeeImg {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
            number
            coffee
          }
          id
          html
        }
      }
    }
  `)

  const coffees = data.coffees.nodes

  return (
    <CoffeesWrap>
      <CoffeeCollection>
        <h1>Our collection</h1>
        <CollectionContainer>
          {coffees.map(coffee => (
            <CoffeesContainer key={coffee.id}>
              <CoffeeBags>
                <GatsbyImage
                  image={getImage(
                    coffee.frontmatter.coffeeImg?.childImageSharp
                      ?.gatsbyImageData
                  )}
                  alt={coffee.frontmatter.coffee}
                />
              </CoffeeBags>
              <DesContainer>
                <Title>{coffee.frontmatter.coffee}</Title>
                <Description
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(coffee.html),
                  }}
                />
              </DesContainer>
            </CoffeesContainer>
          ))}
        </CollectionContainer>
      </CoffeeCollection>
    </CoffeesWrap>
  )
}

export default Coffees

const CoffeesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-bottom: 144px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin-bottom: 200px;
    }
  }
`

const CoffeeCollection = styled.div`
  h1 {
    background-image: linear-gradient(var(--darkGreyBlue), var(--lightCreamBG));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    background-clip: text;
    -moz-text-fill-color: transparent;
    margin-bottom: 26px;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      font-size: 90px;

      @media ${({ theme }) => theme.breakpoint.laptop} {
        font-size: 140px;

        @media ${({ theme }) => theme.breakpoint.desktop} {
          font-size: 150px;
        }
      }
    }
  }
`

const CoffeesContainer = styled.div`
  margin-bottom: 48px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: left;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 12px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 30px;
      }
    }
  }
`

const CollectionContainer = styled.div`
  @media ${({ theme }) => theme.breakpoint.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 1111px;
    height: 399px;
    background-color: transparent;
  }
`
const CoffeeBags = styled.div`
  display: inline-flex;
  align-items: center;
  width: 200px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 0 0 97px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      width: 255px;
      margin: 0;
    }
  }
`
const Title = styled.h4`
  font-size: 24px;
  line-height: 32px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 30px 0 0;
    width: 255px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0;
    }
  }
`

const DesContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 282px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    align-items: left;
    margin-left: 35px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      max-width: 255px;
      margin-left: 0;
      align-items: center;
    }
  }
`

const Description = styled.p`
  height: 50px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 35px 0 0;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      height: 78px;
      margin: unset;
    }
  }
`
