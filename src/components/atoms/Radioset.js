import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Radioset = ({ numID, group, value, title, description }) => {
  return (
    <FieldWrap>
      <input type="radio" id={numID} name={group} value={value} />
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

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;

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
