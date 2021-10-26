import React from "react"
import styled from "styled-components"
import Accordion from "../molecules/Accordion"
import Radioset from "../atoms/Radioset"
import options from "../../data/plan-page/plantab/options"

const Options = () => {
  // const [active, setActive] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <OptionsForm onSubmit={handleSubmit}>
        <Accordion dropdownTitle="How do you drink your coffee?">
          <Fieldset id="group1">
            {options.slice(0, 3).map(option => (
              <Radioset
                key={option.id}
                numID={option.numID}
                group={option.group}
                value={option.value}
                title={option.title}
                description={option.description}
              />
            ))}
          </Fieldset>
        </Accordion>
        <Accordion dropdownTitle="What type of coffee?">
          <Fieldset id="group2">
            {options.slice(3, 6).map(option => (
              <Radioset
                key={option.id}
                numID={option.numID}
                group={option.group}
                value={option.value}
                title={option.title}
                description={option.description}
              />
            ))}
          </Fieldset>
        </Accordion>
      </OptionsForm>
    </>
  )
}

export default Options

const OptionsForm = styled.form``

const Fieldset = styled.fieldset`
  border: 0;
`
