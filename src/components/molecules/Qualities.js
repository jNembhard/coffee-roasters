import React from "react"
import styled from "styled-components"
import qualities from "../../data/home-page/qualities/qualities"

const Qualities = () => {
  return (
    <QualitiesWrap>
      {qualities.map((quality, index) => (
        <Container key={index}>
          <Image src={quality.icon} alt={quality.title} />
          <TitleQuality>{quality.title}</TitleQuality>
          <DescriptionQuality>{quality.description}</DescriptionQuality>
        </Container>
      ))}
    </QualitiesWrap>
  )
}

export default Qualities

const QualitiesWrap = styled.div`
  background-color: transparent;
`

const Container = styled.div`
  background-color: var(--darkCyan);
  width: 279px;
  height: 382px;
  border-radius: 8px;
  margin: 24px 51px;
  text-align: center;
`

const Image = styled.img`
  background-color: transparent;
  margin: 68px 103px 56px;
`

const TitleQuality = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: var(--lightCreamBG);
  background-color: transparent;
`

const DescriptionQuality = styled.p`
  font-size: 16px;
  line-height: 26px;
  width: 212px;
  height: 75px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin: 0 33.5px;
`
