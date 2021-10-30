import * as React from "react"
import Layout from "../components/organisms/Layout"
import Seo from "../components/seo"
import PlanHero from "../components/molecules/PlanHero"
import ProcessPlan from "../components/organisms/ProcessPlan"
import Options from "../components/Organisms/Options"
import PlanContextProvider from "../contexts/PlanContext"

const PlanPage = () => (
  <Layout>
    <Seo title="Create Your Plan" />
    <PlanHero />
    <ProcessPlan />
    <PlanContextProvider>
      <Options />
    </PlanContextProvider>
  </Layout>
)

export default PlanPage
