import React, { useState, useEffect } from 'react'
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
function Head({path}) {
   
    const [PathName, setPathName] = useState('Home')


    
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    const {site:{siteMetadata:{title}}}=data

 useEffect(() => {
         if (path === "/") {
           setPathName("Home")
         } else {
           const p = `${path.slice(1)}`

          setPathName(`${p.toUpperCase()}`)
         }

    
 }, [path])

    return (
      <>
        <Helmet title={`${title} | ${PathName}`} />
      </>
    )
}

export  {Head}
