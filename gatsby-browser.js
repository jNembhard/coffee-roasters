import { AnimatePresence } from "framer-motion"
const React = require("react")

export function wrapPageElement({ element, props }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}
