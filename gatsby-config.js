module.exports = {
  siteMetadata: {
    title: `test`,
    description: `test`,
    author: `Cody Pearce`,
    siteUrl: `https://test.com`,
    social: {
      twitter: `codyapearce`,
    },
  },
  plugins: [
    "gatsby-plugin-react-native-web",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "test",
      },
    },

    `gatsby-plugin-react-helmet`,

    "gatsby-plugin-mdx",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@templates": "src/templates",
          "@utils": "src/utils",
        },
        extensions: ["js", "css"],
      },
    },

    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test`,
        short_name: `test`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `./static/favicon.ico`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
