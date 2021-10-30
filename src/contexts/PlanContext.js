import React, { createContext, useReducer, useEffect } from "react"
import PropTypes from "prop-types"
import { planReducer } from "./reducers/planReducer"
export const PlanContext = createContext()

const PlanContextProvider = ({ children }) => {
  const [plans, dispatch] = useReducer(planReducer, [], () => {
    const localData = localStorage.getItem("plans")
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans))
  }, [plans])

  return (
    <PlanContext.Provider value={(plans, dispatch)}>
      {children}
    </PlanContext.Provider>
  )
}

PlanContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PlanContextProvider
