module.exports = {
  siteMetadata: {
    title: `coffeeroasters`,
    description: `Pick your coffee, choose the frequency, receive and enjoy!`,
    author: `Jason Nembhard`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `desktop`,
        path: `${__dirname}/src/images/assets/home/desktop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tablet`,
        path: `${__dirname}/src/images/assets/home/tablet`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mobile`,
        path: `${__dirname}/src/images/assets/home/mobile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coffees`,
        path: `${__dirname}/src/data/home-page/coffees`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `process`,
        path: `${__dirname}/src/data/home-page/process`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `qualities`,
        path: `${__dirname}/src/data/home-page/qualities`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `desktop`,
        path: `${__dirname}/src/images/assets/about/desktop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tablet`,
        path: `${__dirname}/src/images/assets/about/tablet`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mobile`,
        path: `${__dirname}/src/images/assets/about/mobile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `commitment`,
        path: `${__dirname}/src/data/about-page/commitment`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uncompromising`,
        path: `${__dirname}/src/data/about-page/uncompromising`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `regions`,
        path: `${__dirname}/src/data/about-page/regions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `heroes`,
        path: `${__dirname}/src/data/heroes`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: "blurred",
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
