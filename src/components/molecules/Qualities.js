import React from "react"
import styled from "styled-components"
import qualities from "../../data/home-page/qualities/qualities"

const Qualities = () => {
  return (
    <QualitiesWrap>
      {qualities.map((quality, index) => (
        <Container key={index}>
          <Image src={quality.icon} alt={quality.title} />
          <DesContainer>
            <TitleQuality>{quality.title}</TitleQuality>
            <DescriptionQuality>{quality.description}</DescriptionQuality>
          </DesContainer>
        </Container>
      ))}
    </QualitiesWrap>
  )
}

export default Qualities

const QualitiesWrap = styled.div`
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    display: flex;
  }
`

const Container = styled.div`
  background-color: var(--darkCyan);
  height: 382px;
  border-radius: 8px;
  margin: 24px 51px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    height: 180px;
    display: flex;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 350px;
      height: 382px;
      margin: 0 15px;
    }
  }
`

const Image = styled.img`
  background-color: transparent;
  margin: 68px 103px 56px;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    margin: unset;
  }
`

const DesContainer = styled.div`
  background-color: transparent;
  max-width: 573px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: inline-flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
    width: 344px;
    height: 98px;
    margin: 41px 0 41px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      text-align: center;
    }
  }
`

const TitleQuality = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: var(--lightCreamBG);
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 89px 16px -41px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 0;
    }
  }
`

const DescriptionQuality = styled.p`
  font-size: 16px;
  line-height: 26px;
  max-width: 300px;
  min-width: 212px;
  height: 75px;
  color: var(--lightCreamBG);
  background-color: transparent;
  margin: 0 33.5px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 56px 48px -41px;
    max-width: 344px;
    height: 50px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 24px 48px 48px;
    }
  }
`
