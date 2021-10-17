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
  console.log(steps)

  return (
    <>
      <ProcessWrap>
        <h3>How it works</h3>
        {steps.map(step => (
          <Container>
            <Step>{`0${step.frontmatter.step}`}</Step>
            <Title>{step.frontmatter.title}</Title>
            <Description>{step.frontmatter.description}</Description>
          </Container>
        ))}
        <ButtonWrap>
          <PlanButton />
        </ButtonWrap>
      </ProcessWrap>
    </>
  )
}

export default Process

const ProcessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 1116px;

  h3 {
    font-size: 24px;
    line-height: 32px;
    color: var(--grey);
    margin-top: 120px;
    margin-bottom: -30px;
  }
`

const Container = styled.div`
  width: 327px;
  height: 253px;
  margin: 56px 24px;
  text-align: center;
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
  margin-top: 79px;
`
