import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const linkNames = ["home", "about us", "select a plan"]

const Footer = ({ siteTitle }) => (
  <footer>
    <h3>
      <Link
        to="/"
        style={{
          color: `#ffffff`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h3>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
