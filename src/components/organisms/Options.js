import React from "react"
import styled from "styled-components"
import Accordion from "../molecules/Accordion"
import Radioset from "../atoms/Radioset"
import options from "../../data/plan-page/plantab/options"
import Summary from "../molecules/Summary"
import Selection from "../atoms/Selection"

const Options = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <OptionsForm onSubmit={handleSubmit}>
        <Selection />
        <Container>
          {options.map(option => (
            <Accordion
              key={option.id}
              section={option.name}
              dropdownTitle={option.title}
            >
              {option.steps.map((step, index) => (
                <Radioset
                  key={index}
                  numID={step.numID}
                  group={step.group}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </Accordion>
          ))}
          <Summary />
        </Container>
      </OptionsForm>
    </>
  )
}

export default Options

const OptionsForm = styled.form`
  @media ${({ theme }) => theme.breakpoint.desktop} {
    display: flex;
  }
`

const Container = styled.div`
  @media ${({ theme }) => theme.breakpoint.desktop} {
    width: 740px;
    margin: 88px 125px 88px 165px;
  }
`
