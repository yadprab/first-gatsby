import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Button} from './Button';
function HeroText() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeader {
        nodes {
          buttonLabel
          contentful_id
          heading
          body
        }
      }
    }
  `)
 
const {
  allContentfulHeader: {
    nodes: [{ buttonLabel, heading, body }],
  },
} = data;
  return (
    <>
      <article className="hero--text">
        <h1>{heading}</h1>
        <p>{body}</p>

        <Button label={buttonLabel} />
      </article>
    </>
  )
}

export { HeroText }
