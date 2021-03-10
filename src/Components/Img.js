import React from 'react'
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
function Img() {
    const data = useStaticQuery(graphql`
      query {
        allContentfulAboutSection {
          nodes {
           
            trainer {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `)
    const {
      allContentfulAboutSection: {
        nodes: [
          {
          
           
            trainer: { fluid },
          },
        ],
      },
    } = data
    return (
      <>
        <Image fluid={fluid} Tag="article" />
      </>
    )
}

export { Img}
