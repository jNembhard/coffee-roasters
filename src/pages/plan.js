import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import PlanHero from "../components/molecules/PlanHero"
import ProcessPlan from "../components/organisms/ProcessPlan"
import Accordion from "../components/molecules/Accordion"

const PlanPage = () => (
  <Layout>
    <Seo title="Create Your Plan" />
    <PlanHero />
    <ProcessPlan />
    <Accordion />
  </Layout>
)

export default PlanPage
