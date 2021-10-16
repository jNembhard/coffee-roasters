import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Coffees = () => {
  const data = useStaticQuery(graphql`
    query CoffeesPage {
      coffees: allMarkdownRemark(
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            coffeeImg {
              childImageSharp {
                gatsbyImageData
              }
            }
            number
            coffee
          }

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
          <CoffeesContainer key={coffee.number}>
            <CoffeeBags>
              <GatsbyImage
                key={coffee.number}
                image={getImage(
                  coffee.frontmatter.coffeeImg.childImageSharp.gatsbyImageData
                )}
                alt={coffee.frontmatter.coffee}
              />
            </CoffeeBags>
            <Title>{coffee.frontmatter.coffee}</Title>
            <Description dangerouslySetInnerHTML={{ __html: coffee.html }} />
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
  text-align: center;
`

const CoffeesContainer = styled.div`
  margin-bottom: 48px;
`
const CoffeeCollection = styled.div`
  h1 {
    background-image: linear-gradient(
      /* 180deg, */ var(--darkGreyBlue),
      var(--lightCreamBG)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    margin-bottom: px;
  }
`

const CoffeeBags = styled.div`
  display: inline-flex;
  align-items: center;
  width: 200px;
  height: 151px;
`
const Title = styled.h4`
  font-size: 24px;
  line-height: 32px;
`

const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
`
