import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nordic-tapir`,
    siteUrl: `https://nordic-tapir.netlify.app/`,
    canonical: `https://nordic-tapir.netlify.app/`,
    description: `Welcome to Nordic Tapir Laboratory!`,
    twitterUsername: `https://twitter.com/NordicTapir`,
    image: `./src/images/Tapir.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/Tapir.png"
    }
  }, {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        'gatsby-remark-prismjs',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 640
          }
        }
      ]
    }
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/posts"
      }
    },
    "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
