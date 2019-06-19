import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo'
import styled from 'styled-components';
import Layout from '../components/layout';

const IndexPage = ({data}) => {
return (
  <Layout index>
    <SEO title="Home" keywords={['web', 'development', 'react', 'full', 'stack']} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
  </Layout>
)};

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }}){
      html
      frontmatter {
        title
      }
    }
  }
`;

export default IndexPage
