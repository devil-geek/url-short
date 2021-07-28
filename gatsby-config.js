module.exports = {
  siteMetadata: {
    siteUrl: "https://www.car-oc.com",
    title: "url-short",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Shortly",
        short_name: "Shortly",
        start_url: "/",
        background_color: "hsl(0, 0%, 75%)",
        theme_color: "hsl(257, 27%, 26%)",
        display: "standalone",
        icon: "./src/images/favicon-32x32.png",
        lang: "en",
        description: "More than just shorter links",
      },
    },
  ],
}
