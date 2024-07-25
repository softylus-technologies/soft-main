/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Softylus Technologies`,
    watch: true,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Softylus ",
        short_name: "Softylus",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#EC2227",
        display: "standalone",
        icon: "static/fav Softylus.svg", // This path is relative to the root of the site.
      },
    },
  ],
};
