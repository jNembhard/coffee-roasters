import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import PlanButton from "../atoms/PlanButton"

const Process = () => {
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
    <ProcessWrap>
      <ProcessContainer>
        <h3>How it works</h3>
        <Circles />
        {steps.map(step => (
          <StepContainer>
            <Step>{`0${step.frontmatter.step}`}</Step>
            <Title>{step.frontmatter.title}</Title>
            <Description>{step.frontmatter.description}</Description>
          </StepContainer>
        ))}
        <ButtonWrap>
          <PlanButton />
        </ButtonWrap>
      </ProcessContainer>
    </ProcessWrap>
  )
}

export default Process

const ProcessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProcessContainer = styled.div`
  width: 327px;
  height: 1116px;
  text-align: center;

  h3 {
    font-size: 24px;
    line-height: 32px;
    color: var(--grey);
  }
`
const Circles = styled.div`
  display: none;
`
const StepContainer = styled.div`
  width: 327px;
  height: 253px;
  margin: 56px 0;
`
const Step = styled.h1`
  font-size: 72px;
  line-height: 72px;
  color: var(--paleOrange);
`
const Title = styled.h2`
  font-size: 28px;
  line-height: 32px;
  color: var(--darkGreyBlue);
`
const Description = styled.p`
  width: 327px;
  height: 101px;
  color: var(--darkGreyBlue);
`

const ButtonWrap = styled.div`
  width: 217px;
  height: 56px;
  margin: 79px 55px 0;
`
