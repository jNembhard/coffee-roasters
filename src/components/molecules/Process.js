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
        <AtomWrap>
          <ProcessAtom />
        </AtomWrap>
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    flex-direction: row;
    margin: 0 44px;
  }
`
const AtomWrap = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: inline-flex;
    flex-direction: row;
    width: 689px;
    height: 422px;
  }
`
const ProcessContainer = styled.div`
  width: 327px;
  height: 1116px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 689px;
    height: 622px;
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
    color: var(--grey);

    @media ${({ theme }) => theme.breakpoint.tablet} {
      text-align: left;
    }
  }
`

const ButtonWrap = styled.div`
  width: 217px;
  height: 56px;
  margin: 79px 55px 0;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    margin: 60px 472px 0 0;
  }
`
