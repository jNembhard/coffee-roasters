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
`
const Container = styled.div`
  width: 327px;
  height: 902px;
  background-color: var(--darkGreyBlue);
  border-radius: 8px;
  position: relative;
`

const TitleChoice = styled.h1`
  color: var(--lightCreamBG);
  background-color: var(--darkGreyBlue);
  font-size: 28px;
  line-height: 28px;
  margin-top: 64px;
`

const DescriptionChoice = styled.p`
  color: var(--lightCreamBG);
  background-color: var(--darkGreyBlue);
  font-size: 15px;
  line-height: 25px;
  width: 279px;
  height: 125px;
  margin: 0 24px 64px;
`
const ContainerTwo = styled.div`
  background-color: transparent;
  position: absolute;
  margin-top: 880px;
`
