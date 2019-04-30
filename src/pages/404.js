import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>You just hit a route that doesn&#39;t exist. Feel free to explore the rest of the site!</p>
  </Layout>
)

export default NotFoundPage
