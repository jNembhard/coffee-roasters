import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PlanButton = () => {
  return (
    <>
      <Link to="/plan" style={{ textDecoration: `none` }}>
        <Button>Create your plan</Button>
      </Link>
    </>
  )
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
  /* padding: 0; */
  border: none;
  background-color: var(--darkCyan);
  color: var(--lightCreamBG);

  border-radius: 8px;
  cursor: pointer;
`
