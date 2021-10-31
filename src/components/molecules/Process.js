import React from "react"
import styled from "styled-components"
import PlanButton from "../atoms/PlanButton"
import ProcessAtom from "../atoms/ProcessAtom"
import { Link } from "gatsby"

const Process = () => {
  return (
    <ProcessWrap>
      <ProcessContainer>
        <h3>How it works</h3>
        <ProcessAtom />
        <ButtonWrap>
          <Link to="/plan" style={{ textDecoration: `none` }}>
            <PlanButton />
          </Link>
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

const ButtonWrap = styled.div`
  width: 217px;
  height: 56px;
  margin: 79px 55px 0;
`
