import React from "react"
import { Layout } from "./src/Components/Layout"

function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
