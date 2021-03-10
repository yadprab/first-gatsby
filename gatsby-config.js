/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */


  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
  ],
}
