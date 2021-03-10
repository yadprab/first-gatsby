import React from 'react'
import { Link, useStaticQuery, graphql} from "gatsby"
import Image from "gatsby-image"
function BlogComp() {

    const data = useStaticQuery(graphql`
      query {
        allContentfulBlog {
          nodes {
            id
            title
            slug
            body {
              body
            }
            author
            banner {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            profile {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `)
    const { allContentfulBlog:{nodes} } = data
    return (
      <>
        <section className="blog--section">
        {nodes.map(n=>{
            return (
              <article className="blog--content" key={n.id}>
                <Image
                  className="banner"
                  Tag="article"
                  fluid={n.banner.fluid}
                />
                <article className="profile--image">
                  <Image
                    className="profile"
                    Tag="article"
                    fluid={n.profile.fluid}
                  />
                  <p>{n.author}</p>
                </article>
                <article className="content">
                  <h3 className="name">{n.title}?</h3>
                  <p>{n.body.body.slice(0, 200)}</p>
                </article>
                <article className='link'>
                  <Link to={`/blog/${n.slug}`}>Read more</Link>
                </article>
              </article>
            )
        })}



        
        </section>
      </>
    )
}

export {BlogComp}
