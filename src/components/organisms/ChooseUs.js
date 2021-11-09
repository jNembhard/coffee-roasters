import React from "react"
import styled from "styled-components"
import Qualities from "../molecules/Qualities"

const ChooseUs = () => {
  return (
    <ChoiceWrap>
      <Container>
        <TitleChoice>Why choose us?</TitleChoice>
        <DescriptionChoice>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </DescriptionChoice>
      </Container>
      <ContainerTwo>
        <Qualities />
      </ContainerTwo>
    </ChoiceWrap>
  )
}

export default ChooseUs

const ChoiceWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 680px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-bottom: 434px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin-bottom: 234px;
    }
  }
`
const Container = styled.div`
  margin: 0 24px;
  height: 902px;
  background-color: var(--darkGreyBlue);
  border-radius: 8px;
  position: relative;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 40px;
    height: 573px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 0 80px;
      width: 1140px;
      height: 500px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        height: 573px;
        width: 1280px;
      }
    }
  }
`

const TitleChoice = styled.h1`
  color: var(--lightCreamBG);
  background-color: var(--darkGreyBlue);
  font-size: 28px;
  line-height: 28px;
  margin-top: 64px;

  media ${({ theme }) => theme.breakpoint.laptop} {
    font-size: 40px;
    line-height: 48px;
  }
`

const DescriptionChoice = styled.p`
  color: var(--lightCreamBG);
  background-color: var(--darkGreyBlue);
  font-size: 15px;
  line-height: 25px;
  height: 125px;
  margin: 0 24px 64px;
  max-width: 500px;
  min-width: 279px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    max-width: 540px;
    margin: 0 100px 64px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin: 32px 320px 86px;

      @media ${({ theme }) => theme.breakpoint.desktop} {
        margin: 32px 370px 86px;
      }
    }
  }
`
const ContainerTwo = styled.div`
  background-color: transparent;
  position: absolute;
  margin-top: 880px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: 555px;

    @media ${({ theme }) => theme.breakpoint.laptop} {
      margin-top: 400px;
    }
  }
`
