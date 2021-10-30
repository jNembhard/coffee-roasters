import React, { createContext, useContext } from "react"
import styled from "styled-components"
import Accordion from "../molecules/Accordion"
import Radioset from "../atoms/Radioset"
import options from "../../data/plan-page/plantab/options"
import Summary from "../atoms/Summary"

const Options = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <OptionsForm onSubmit={handleSubmit}>
        {options.map(option => (
          <Accordion key={option.id} dropdownTitle={option.title}>
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
      </OptionsForm>
    </>
  )
}

export default Options

const OptionsForm = styled.form``
