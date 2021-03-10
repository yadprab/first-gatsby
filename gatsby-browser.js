import React from "react"
import { Layout } from "./src/Components/Layout"
import "./src/styles/style.css"
function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
