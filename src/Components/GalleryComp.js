import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import Image from "gatsby-image";
function GalleryComp() {
    const data = useStaticQuery(graphql`
      query {
        allContentfulGallery {
          nodes {
            id
            equipment
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `)
    const { allContentfulGallery:{nodes} } = data
    return (
        <>
       {
           nodes.map(n=>{
               return( 
             <article className="gallery--image" key={n.id}>
                   <Image fluid={n.image.fluid}/>
                    <p>{n.equipment}</p>
               </article>
               )
           })
       }
            
        </>
    )
}

export  {GalleryComp}
