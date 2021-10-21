import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import AboutHero from "../components/molecules/AboutHero"
import Commitment from "../components/molecules/Commitment"
import Uncompromising from "../components/molecules/Uncompromising"
import Regions from "../components/organisms/Regions"

const AboutUsPage = () => (
  <Layout>
    <Seo title="About Us" />
    <AboutHero />
    <Commitment />
    <Uncompromising />
    <Regions />
  </Layout>
)

export default AboutUsPage
