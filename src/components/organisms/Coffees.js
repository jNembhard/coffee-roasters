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
        {coffees.map(coffee => (
          <CoffeesContainer key={coffee.id}>
            <CoffeeBags>
              <GatsbyImage
                image={getImage(
                  coffee.frontmatter.coffeeImg?.childImageSharp?.gatsbyImageData
                )}
                alt={coffee.frontmatter.coffee}
              />
            </CoffeeBags>
            <DesContainer>
              <Title>{coffee.frontmatter.coffee}</Title>
              <Description
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(coffee.html) }}
              />
            </DesContainer>
          </CoffeesContainer>
        ))}
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
  }
`

const CoffeesContainer = styled.div`
  margin-bottom: 48px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: flex;
    flex-direction: row;
    text-align: left;
  }
`
const CoffeeCollection = styled.div`
  h1 {
    background-image: linear-gradient(
      /* 180deg, */ var(--darkGreyBlue),
      var(--lightCreamBG)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    background-clip: text;
    -moz-text-fill-color: transparent;
    margin-bottom: 26px;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      font-size: 90px;
      margin: 0 40px;
    }
  }
`

const CoffeeBags = styled.div`
  display: inline-flex;
  align-items: center;
  width: 200px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 0 0 97px;
  }
`
const Title = styled.h4`
  font-size: 24px;
  line-height: 32px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: inline-flex;
    align-items: center;
    margin: 0 30px 0 0;
    width: 255px;
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
  }
`

const Description = styled.p`
  height: 50px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 35px 0 0;
  }
`
