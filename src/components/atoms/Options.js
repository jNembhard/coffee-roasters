import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Options = () => {
  const [active, setActive] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
  }

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { number: { gte: 26, lt: 29 } } }
        sort: { fields: frontmatter___number, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            description
            state
            number
          }
          id
        }
      }
    }
  `)

  const tabs = data.allMarkdownRemark.nodes

  return (
    <>
      <OptionsWrap onSubmit={handleSubmit}>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            active={active === tab.frontmatter.state ? "active" : ""}
            onClick={() => setActive(tab.frontmatter.state)}
          >
            <Title>{tab.frontmatter.title}</Title>
            <DContainer>
              <Description>{tab.frontmatter.description}</Description>
            </DContainer>
          </Button>
        ))}
      </OptionsWrap>
    </>
  )
}

Options.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  state: PropTypes.string,
}

Options.defaultTypes = {
  title: ``,
  description: ``,
  state: ``,
}

export default Options

const OptionsWrap = styled.form``

const Button = styled.button`
  background-color: var(--specialCream);
  border-radius: 8px;
  margin: 16px 0;
  border: 1px solid transparent;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: var(--paleOrange);

    h2,
    p {
      color: var(--darkGreyBlue);
    }
  }

  ${({ active }) =>
    active &&
    `background-color: var(--darkCyan);
    h2,
    p {
        color: var(--lightCreamBG);
        background-color: transparent;
      }
    `}
`

const Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--darkGreyBlue);
  background-color: transparent;
  margin: 24px 0 0 25px;
`

const DContainer = styled.div`
  max-width: 278px;
  margin: 8px 24px 24px;
  background-color: transparent;
`

const Description = styled.p`
  font-size: 15px;
  line-height: 26px;
  color: var(--darkGreyBlue);
  background-color: transparent;
`
