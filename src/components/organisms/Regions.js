import React from "react"
import styled from "styled-components"
import regions from "../../data/about-page/regions/regions"

const Region = () => {
  return (
    <RegionWrap>
      <Title>Our headquarters</Title>
      <RegionContainer>
        {regions.map(region => (
          <Container key={region.id}>
            <Image
              src={region.countryImg}
              width={region.width}
              height={region.height}
              alt={region.name}
            />
            <RegionName>{region.name}</RegionName>
            <Country>
              {region.address}
              <br />
              {region.province}
              <br />
              {region.zipcode}
              <br />
              {region.phone}
            </Country>
          </Container>
        ))}
      </RegionContainer>
    </RegionWrap>
  )
}

export default Region

const RegionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    text-align: left;
    justify-content: normal;
    height: 366px;
    margin: 0 40px;
  }
`

const Image = styled.img`
  margin-bottom: 38px;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    margin-bottom: 48px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin-bottom: 46px;
    }
  }
`

const Title = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: var(--grey);
  text-align: left;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0 473px 72px 0;
    width: 255px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      font-size: 32px;
      line-height: 36px;
      margin: 0 790px 72px 0;
      width: 300px;
    }
  }
`

const Container = styled.div`
  width: 327px;
  height: 262px;
  margin-top: 72px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: unset;
    width: 223px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 272px;
      margin: 0 95px 0 0;
    }
  }
`

const RegionName = styled.h1`
  font-size: 28px;
  line-height: 36px;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 24px;
    magin-bottom: 21px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 24px;
      width: 272px;
    }
  }
`

const RegionContainer = styled.div`
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: flex;
    flex-direction: row;
    width: 688px;
    height: 262px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      width: 1045px;
      height: 262px;
    }
  }
`

const Country = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: var(--darkGreyBlue);
`
