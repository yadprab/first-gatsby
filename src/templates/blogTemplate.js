import React from 'react'
import Image from "gatsby-image"
import {graphql, Link}  from 'gatsby';
function blogTemplate({data}) {

  const {
    contentfulBlog: {
      title,
      author,
      banner,
      body: { body },
      profile,
    },
  } = data
    return (
      <>
        <main className="blog--main">
          <section className="post--section">
            <article className="profile--image">
              <Image className="profile" Tag="article" fluid={profile.fluid} />
              <p>{author}</p>
            </article>
            <h1>{title}</h1>
            <article className="post">
              <div className="banner--image">
                <Image
                  className="banner--image"
                  Tag="article"
                  fluid={banner.fluid}
                />
              </div>

              <p>{body}</p>
            </article>
            <Link to="/blog">Back to Blog page</Link>
          </section>
        </main>
      </>
    )
}
  export const data = graphql`
    query($slug: String) {
      contentfulBlog(slug: { eq: $slug }) {
        id
        title
        author
        banner {
          fluid {
            ...GatsbyContentfulFluid
          }
        }

        body {
          body
        }
        profile {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `
export default blogTemplate
