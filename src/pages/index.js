import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import HeroHome from "../components/molecules/HeroHome"
import Coffees from "../components/organisms/Coffees"
import ChooseUs from "../components/organisms/ChooseUs"
import Process from "../components/molecules/Process"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroHome />
    <Coffees />
    <ChooseUs />
    <Process />
  </Layout>
)

export default IndexPage
