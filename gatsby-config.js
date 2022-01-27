module.exports = {
  siteMetadata: {
    title: `James Troughton`,
    description: `A personal portfolio for James Troughton`,
    author: `@jamesindeed`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pf-2022-gatsby`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: ` #f5f0ec`,
        theme_color: `#252422`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
  ],
}
