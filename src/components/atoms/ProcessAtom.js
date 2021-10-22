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
            number
          }
        }
      }
    }
  `)

  const steps = data.steps.nodes

  return (
    <>
      <Circles />
      {steps.map(step => (
        <StepContainer>
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
  display: none;
`
const StepContainer = styled.div`
  width: 327px;
  height: 253px;
  margin: 56px 0;
  background-color: transparent;
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
`
