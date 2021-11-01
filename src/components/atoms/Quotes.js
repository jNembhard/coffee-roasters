import React from "react"
import styled from "styled-components"
import { useSharedSummary } from "../../hooks/useSummary"

const Quotes = () => {
  const { group1, group2, group3, group4, group5 } = useSharedSummary()

  return (
    <Quote className="quotes">
      “I drink coffee{" "}
      <span className="special">
        {group1 === "Capsules" ? "using " : "as "}
      </span>
      <span>{group1 ? group1 : "_____"}</span>, with a{" "}
      <span>{group2 ? group2 : "_____"}</span> type of bean.{" "}
      <span>{group3 ? group3 : "_____"}</span>{" "}
      {group1 !== "Capsules" && <span className="special">ground ala </span>}
      {group1 !== "Capsules" && <span>{group4 ? ` ${group4}` : ` _____`}</span>}
      , sent to me <span>{group5 ? group5 : "_____"}</span>.”
    </Quote>
  )
}

export default Quotes

const Quote = styled.h2`
  font-size: 24px;
  line-height: 40px;
  background-color: transparent;

  .special {
    color: inherit;
    text-transform: none;
  }

  span {
    color: var(--darkCyan);
    background-color: transparent;
    text-transform: capitalize;
  }
`
