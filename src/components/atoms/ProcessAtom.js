import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ProcessAtom = () => {
  const data = useStaticQuery(graphql`
    query StepsComponent {
      steps: allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 8, lt: 11 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            step
            title
            description
            borderTop
            number
          }
          id
        }
      }
    }
  `)

  const steps = data.steps.nodes

  return (
    <>
      {steps.map(step => (
        <StepContainer
          key={step.id}
          style={{ borderTop: step.frontmatter.borderTop }}
        >
          <Circles className="circles" />
          <Step>{`0${step.frontmatter.step}`}</Step>
          <Title>{step.frontmatter.title}</Title>
          <Description>{step.frontmatter.description}</Description>
        </StepContainer>
      ))}
    </>
  )
}

export default ProcessAtom

const Circles = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    position: absolute;
    width: 31px;
    height: 31px;
    border: 2px solid var(--darkCyan);
    border-radius: 100%;
    z-index: 1;
    margin-top: -37px;
  }
`

const StepContainer = styled.div`
  width: 327px;
  height: 253px;
  margin: 56px 0;
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    position: relative;
    text-align: left;
    width: 223px;
    height: 371px;
    margin: 20px 0 56px;
    padding-top: 20px;
    border-top: 2px solid var(--paleOrange);
  }
`
const Step = styled.h1`
  font-size: 72px;
  line-height: 72px;
  color: var(--paleOrange);
  background-color: transparent;
`
const Title = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: var(--darkGreyBlue);
  background-color: transparent;
`
const Description = styled.p`
  width: 327px;
  height: 101px;
  color: var(--darkGreyBlue);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: unset;
    height: unset;
    margin-right: 10px;
    margin-left: 0;
  }
`
