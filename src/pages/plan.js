import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import PlanHero from "../components/molecules/PlanHero"
import ProcessPlan from "../components/organisms/ProcessPlan"
import Options from "../components/organisms/Options"

const PlanPage = () => (
  <Layout>
    <Seo title="Create Your Plan" />
    <PlanHero />
    <ProcessPlan />
    <Options />
  </Layout>
)

export default PlanPage
