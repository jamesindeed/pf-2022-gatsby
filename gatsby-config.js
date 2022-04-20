module.exports = {
  siteMetadata: {
    title: `James Troughton`,
    description: `A personal portfolio for James Troughton`,
    author: `@jamesindeed`,
    siteUrl: "https://jamestroughton.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-portfolio-2022`,
    //     short_name: `pf-2022`,
    //     start_url: `/`,
    //     background_color: `#e5e5e5`,
    //     theme_color: `#000`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon.png`,
    //   },
    // },
  ],
}
