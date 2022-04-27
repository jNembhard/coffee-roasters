import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import { useSharedSummary } from "../../hooks/useSummary"

const selections = [
  { id: 1, name: "Preferences", section: "#drink" },
  { id: 2, name: "Bean Type", section: "#type" },
  { id: 3, name: "Quantity", section: "#quantity" },
  { id: 4, name: "Grind Option", section: "#grind" },
  { id: 5, name: "Deliveries", section: "#delivery" },
]

const Selection = () => {
  const [active, setActive] = useState("")
  const { accordion } = useSharedSummary()

  return (
    <SelectionWrap>
      <SelectionsUL>
        {selections.map(selection => (
          <React.Fragment key={selection.id}>
            <li
              onClick={() => {
                setActive(`${selection.name}`)
                scrollTo(`${selection.section}`)
              }}
              disabled={true}
              className={active === `${selection.name}` ? "active" : ""}
              style={
                accordion && selection.id === 4
                  ? { color: "#83888f", opacity: 0.3 }
                  : {}
              }
            >
              {selection.name}
            </li>
            <hr />
          </React.Fragment>
        ))}
      </SelectionsUL>
    </SelectionWrap>
  )
}

export default Selection

const SelectionWrap = styled.aside`
  display: none;

  @media ${({ theme }) => theme.breakpoint.laptop} {
    position: sticky;
    top: 0;
    display: inherit;
    width: 255px;
    height: 356px;
    margin: 105px 0 0 65px;

    @media ${({ theme }) => theme.breakpoint.desktop} {
      margin: 115px 0 0 65px;
    }
  }
`

const SelectionsUL = styled.ul`
  @media ${({ theme }) => theme.breakpoint.laptop} {
    list-style-type: none;
    font-family: "Fraunces";
    font-size: 24px;
    line-height: 32px;

    li {
      margin: 24px 0;
      width: 255px;
      counter-increment: item;
      cursor: pointer;

      &::before {
        content: "0" counter(item) " ";
        margin-right: 24px;
      }

      &:first-child {
        counter-reset: item;
      }

      &:hover {
        color: var(--darkGreyBlue);
        &::before {
          color: var(--grey);
        }
      }

      &.active {
        counter-increment: item;
        color: var(--darkGreyBlue);

        &::before {
          color: var(--darkCyan);
          content: "0" counter(item) " ";
        }
      }
    }

    hr {
      width: 255px;
      &:last-child {
        display: none;
      }
    }
  }
`
