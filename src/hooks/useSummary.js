import { useState } from "react"
import { useBetween } from "use-between"

const initialState = {
  drink: "",
  type: "",
  amount: "",
  grind: "",
  delivery: "",
}

const useSummary = () => {
  const [{ group1, group2, group3, group4, group5 }, setActive] =
    useState(initialState)

  const clearGroup = () => {
    setActive({ ...initialState })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setActive(prevState => ({ ...prevState, [name]: value }))
  }

  const shippingCost = () => {
    if (group3 === "250g") {
      return group5 === "Every week"
        ? 7.2 * 4
        : group5 === "Every 2 weeks"
        ? 9.6 * 2
        : 12.0
    } else if (group3 === "500g") {
      return group5 === "Every week"
        ? 13 * 4
        : group5 === "Every 2 weeks"
        ? 17.5 * 2
        : 22.0
    } else {
      return group5 === "Every week"
        ? 22 * 4
        : group5 === "Every 2 weeks"
        ? 32 * 2
        : 42.0
    }
  }

  return {
    group1,
    group2,
    group3,
    group4,
    group5,
    handleChange,
    shippingCost,
  }
}

export const useSharedSummary = () => useBetween(useSummary)
