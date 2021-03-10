import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
function AboutContent() {

    const data = useStaticQuery(graphql`
      query {
        allContentfulAboutSection {
          nodes {
            name
            position
            aboutus {
              aboutus
            }
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
            name,
            position,
            aboutus: { aboutus },
           
          },
        ],
      },
    } = data
    return (
      <>
        <article className="about--content">
          <h3 className='name'>{name}</h3>
          <p className="small">{position}</p>

          <p>{aboutus}</p>
        </article>
      </>
    )
}

export  {AboutContent}
