import React from "react"
import PlanButton from "../atoms/PlanButton"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import HomeDesktopBanner from "../../images/assets/home/desktop/image-hero-coffeepress.jpg"
import HomeTabletBanner from "../../images/assets/home/tablet/image-hero-coffeepress.jpg"
import mobilecoffeepress from "../../images/assets/home/mobile/image-hero-coffeepress.jpg"
import styled from "styled-components"

const HeroHome = () => {
  const isScreenSize767 = useMediaQuery("(min-width: 767px)")
  const isScreenSize992 = useMediaQuery("(min-width: 992px)")

  // const handleChange = () => {
  //   isScreenSize992
  //     ? HomeDesktopBanner
  //     : isScreenSize767
  //     ? HomeTabletBanner
  //     : HomeMobileBanner
  // }

  return (
    <>
      <HeroWrap>
        <GatsbyImage
          image={mobilecoffeepress}
          // width={300}
          // quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          // style={{ marginBottom: `1.45rem` }}
        />
        <HeroContainer>
          <Title>Great coffee made simple.</Title>
          <Description>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Description>
          <PlanButton />
        </HeroContainer>
      </HeroWrap>
    </>
  )
}

export default HeroHome

const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const HeroContainer = styled.div`
  text-align: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 40px;
`

const Description = styled.p`
  font-family: "Barlow";
  font-weight: var(--barlowRegular);
  line-height: 25px;
`
