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
        <Line />
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
    margin: 0 44px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      align-items: left;
      margin: 0 80px;
    }
  }
`

const Line = styled.hr`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    border: 0;
    width: 467px;
    height: 2px;
    background: var(--paleOrange);
    background-image: var(--paleOrange);
    margin-left: 20px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      border: 0;
      width: 760px;
      height: 2px;
      background: var(--paleOrange);
      background-image: var(--paleOrange);
      margin-left: 45px;
    }
  }
`

const AtomWrap = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 689px;
    height: 422px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      height: 371px;
      width: unset;
    }
  }
`
const ProcessContainer = styled.div`
  width: 327px;
  height: 1116px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 689px;
    height: 622px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 1045px;
      height: 565px;
      margin-right: 120px;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 32px;
    color: var(--grey);

    @media ${({ theme }) => theme.breakpoint.tablet} {
      text-align: left;
      margin-bottom: 40px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 0 790px 80px 40px;
        width: 255px;
      }
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

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 104px 472px 0 45px;
    }
  }
`
