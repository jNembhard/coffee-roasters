import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const PlanButton = ({ onOpen, disable }) => {
  return (
    <>
      <Button
        onClick={onOpen}
        disabled={disable}
        className={disable === true ? "active" : ""}
      >
        Create your plan
      </Button>
    </>
  )
}

PlanButton.propTypes = {
  link: PropTypes.string,
  modal: PropTypes.bool,
}

PlanButton.defaultTypes = {
  link: ``,
  modal: false,
}

export default PlanButton

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Fraunces";
  font-size: 18px;
  font-weight: var(--frauncesBlack);
  line-height: 25px;
  width: 217px;
  height: 56px;
  border: none;
  background-color: var(--darkCyan);
  color: var(--lightCreamBG);

  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--cyan);
  }

  &.active {
    background-color: var(--grey);
    opacity: 0.3;
  }
`
