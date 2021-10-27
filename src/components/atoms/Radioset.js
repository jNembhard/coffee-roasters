import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Radioset = ({ numID, group, value, title, description }) => {
  const [active, setActive] = useState("capsule")
  const [click, setClick] = useState("")

  const handleStepChange = e => {
    e.preventDefault()
    setActive(e.target.value)
  }

  const handleClick = e => {
    setClick(e.target.value)
  }

  const resetRadioState = () => {
    setActive("")
  }
  // console.log(active)

  return (
    <FieldWrap id={group}>
      <input
        type="radio"
        id={numID}
        name={group}
        value={value}
        checked={value}
        onChange={handleStepChange}
      />
      <Label for={numID}>
        <Title>{title}</Title>
        <DContainer>
          <Description>{description}</Description>
        </DContainer>
      </Label>
    </FieldWrap>
  )
}

export default Radioset

Radioset.propTypes = {
  numID: PropTypes.string,
  group: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

Radioset.defaultTypes = {
  numID: ``,
  group: ``,
  value: ``,
  title: ``,
  description: ``,
}

const FieldWrap = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background-color: var(--darkCyan);
    h2,
    p {
      color: var(--lightCreamBG);
    }
  }
`

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--darkGreyBlue);
  background-color: transparent;
  margin: 24px 0 0 25px;
`

const DContainer = styled.div`
  max-width: 278px;
  margin: 8px 24px 24px;
  background-color: transparent;
`

const Description = styled.p`
  font-size: 15px;
  line-height: 26px;
  color: var(--darkGreyBlue);
  background-color: transparent;
`

const Label = styled.label`
  display: inline-block;
  margin: 16px 0;
  background-color: var(--specialCream);
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: var(--paleOrange);

    h2,
    p {
      color: var(--darkGreyBlue);
    }
  }
`
