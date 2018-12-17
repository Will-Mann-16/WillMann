module.exports = {
  siteMetadata: {
    title: 'Will Mann',
    meta: 'Computing Student',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'Will Mann',
    footer: 'Will Mann is a computing student who developed this project.'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Will Mann',
        short_name: 'starter',
        start_url: '/',
        background_color: '#192a56',
        theme_color: '#192a56',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify'
  ],
}
