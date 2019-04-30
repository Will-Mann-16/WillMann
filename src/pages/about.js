import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" keywords={['web', 'development', 'react', 'full', 'stack']} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
</Layout>
)

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" }}){
      html
      frontmatter {
        title
      }
    }
  }
`;

export default AboutPage
