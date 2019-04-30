module.exports = {
  siteMetadata: {
    title: 'Will Mann',
    meta: 'Full Stack Web Developer',
    description: 'Will Mann is a full stack web developer, who can develop a variety of projects',
    author: 'Will Mann',
    footer: 'Will Mann is a computing student who developed this website as a showcase of his skills.'
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
        short_name: 'willmann',
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
    {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `pages`,
         path: `${__dirname}/src/content`,
       },
     },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify'
  ],
}
