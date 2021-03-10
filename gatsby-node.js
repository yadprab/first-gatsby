

const path = require('path')

module.exports.createPages = async({graphql, actions})=>{
   
    const {createPage} = actions

    const blogTemp = path.resolve("./src/templates/blogTemplate.js")

    const res = await graphql(`
      query {
        allContentfulBlog {
          nodes {
            slug
          }
        }
      }
    `)

    res.data.allContentfulBlog.nodes.forEach(n=>{

        createPage({
            component:blogTemp,
            path:`blog/${n.slug}`,
            context:{
                slug:n.slug
            }
        })


    })


}

