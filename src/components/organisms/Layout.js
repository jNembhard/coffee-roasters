import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"
import { motion } from "framer-motion"

const variants = {
  initial: {
    opacity: 0,
    y: 300,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 75,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      type: "spring",
      mass: 0.35,
      stiffness: 80,
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
}

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <div>
          <motion.main
            key={path}
            initial="initial"
            animate="enter"
            variants={variants}
            exit="exit"
          >
            {children}
          </motion.main>
          <Footer
            siteTitle={data.site.siteMetadata?.title || `coffeeroasters`}
          />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
