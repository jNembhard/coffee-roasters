import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const Backdrop = ({ children, onClick }) => {
  return (
    <ModalWrap
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </ModalWrap>
  )
}

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Backdrop

const ModalWrap = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  .quotes {
    color: var(--grey);
    margin: 40px 24px 0;

    @media ${({ theme }) => theme.breakpoint.tablet} {
      margin: 57px 56px 7px;
    }
  }
`
