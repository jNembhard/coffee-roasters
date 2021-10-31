import * as React from "react"
import Seo from "../components/seo"
import Order from "../components/organisms/Order"
import styled from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"

const OrderPage = () => (
  <>
    <GlobalStyles />
    <Seo title="Order Summary" />
    <Order />
  </>
)

export default OrderPage
