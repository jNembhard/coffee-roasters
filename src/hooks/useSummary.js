import React, { useState } from "react"
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

  console.log(group1)

  return { group1, group2, group3, group4, group5, handleChange }
}

export const useSharedSummary = () => useBetween(useSummary)
