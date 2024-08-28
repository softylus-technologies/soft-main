module.exports = {
  siteMetadata: {
    title: `Softylus Technologies`,
    siteUrl: `https://softylus.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Softylus",
        short_name: "Softylus",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#EC2227",
        display: "standalone",
        icon: "static/fav Softylus.svg",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://softylus.com`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://softylus.com',
        sitemap: 'https://softylus.com/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `G-JVJ8H4Y7SN`, 

        // Include GTM in development
        includeInDevelopment: false, // Set to true if you want GTM in development

        defaultDataLayer: { platform: "gatsby" },

      
      },
    },
    {
      resolve: "@sentry/gatsby",
    },
  ],
};
