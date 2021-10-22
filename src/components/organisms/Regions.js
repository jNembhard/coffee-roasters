import React from "react"
import styled from "styled-components"
import regions from "../../data/about-page/regions/regions"

const Region = () => {
  return (
    <>
      <RegionWrap>
        <Title>Our headquarters</Title>

        {regions.map(region => (
          <Container key={region.id}>
            <Image
              src={region.countryImg}
              width={region.width}
              height={region.height}
              alt={region.name}
            />
            <RegionName>{region.name}</RegionName>
            <DescriptionContainer>
              <Country>
                {region.address}
                <br />
                {region.province}
                <br />
                {region.zipcode}
                <br />
                {region.phone}
              </Country>
            </DescriptionContainer>
          </Container>
        ))}
      </RegionWrap>
    </>
  )
}

export default Region

const RegionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Image = styled.img`
  margin-bottom: 38px;
`

const Title = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: var(--grey);
`

const Container = styled.div`
  width: 327px;
  height: 262px;
  margin-top: 72px;
`

const RegionName = styled.h1`
  font-size: 28px;
  line-height: 36px;
`
const DescriptionContainer = styled.div``

const Country = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: var(--darkGreyBlue);
`
