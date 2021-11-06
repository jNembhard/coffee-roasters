import React, { useState } from "react"
import styled from "styled-components"

const selections = [
  { id: 1, name: "Preferences" },
  { id: 2, name: "Bean Type" },
  { id: 3, name: "Quantity" },
  { id: 4, name: "Grind Option" },
  { id: 5, name: "Deliveries" },
]

const Selection = () => {
  const [active, setActive] = useState("")

  return (
    <SelectionWrap>
      <SelectionsUL>
        {selections.map(selection => (
          <React.Fragment key={selection.id}>
            <li
              onClick={() => {
                setActive(`${selection.name}`)
              }}
              className={active === `${selection.name}` ? "active" : ""}
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

const SelectionWrap = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoint.desktop} {
    display: inherit;
    width: 255px;
    height: 356px;
    margin: 115px 0 0 65px;
  }
`

const SelectionsUL = styled.ul`
  @media ${({ theme }) => theme.breakpoint.desktop} {
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
