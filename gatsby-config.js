module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "JIA Technology",
    contact: {
      phone: "571-264-3645",
      email: "jia.technology.us@gmail.com",
    },
    menuLinks: [
      {
        name: "Services",
        link: "/products",
      },
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};
