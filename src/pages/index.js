import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import HeroHome from "../components/molecules/HeroHome"
import Coffees from "../components/organisms/Coffees"
import ChooseUs from "../components/organisms/ChooseUs"
import Process from "../components/molecules/Process"
// import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <HeroHome />
    </div>
    <Coffees />
    <ChooseUs />
    <Process />
    <div></div>
  </Layout>
)

export default IndexPage
