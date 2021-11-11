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
    <OptionsWrap>
      <OptionsForm onSubmit={handleSubmit}>
        <Selection />
        <Container>
          {options.map(option => (
            <Accordion
              key={option.id}
              buttonID={option.id}
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
    </OptionsWrap>
  )
}

export default Options

const OptionsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const OptionsForm = styled.form`
  display: inline-flex;
`

const Container = styled.div`
  @media ${({ theme }) => theme.breakpoint.laptop} {
    width: 740px;
    margin: 88px 100px 0;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 88px 125px 0 165px;
    }
  }
`
