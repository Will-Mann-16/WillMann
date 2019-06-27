import React from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'

const Project = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  background-color: white;
  border-radius: 5px;
  max-width: 400px;
  overflow: hidden;
  & > div{
    padding: 2px 16px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Completed = styled.span`
  color: ${({completed}) => completed ? '#4cd137' : '#e74c3c'};
  font-weight: bold;
`;

const ProjectGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 400px));
  grid-gap: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Language = styled.span`
  color: #95a5a6;
`;

const ProjectsPage = ({data}) => (
  <Layout style={{width: '100%'}}>
    <SEO title="Projects" keywords={['web', 'development', 'react', 'full', 'stack']} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
    <ProjectGroup>
    {data.markdownRemark.frontmatter.projects.map((project, key) => <Project key={key}>
    <Thumbnail src={project.thumbnail}/>
    <div>
    <h3>{project.title}</h3>
    <p style={{marginBottom: '0.5em'}}>{project.description}</p>
    <Completed completed={project.completed}>{project.completed ? 'Complete' : 'Not complete'}</Completed>
    <Flex>{project.languages.map((language, key) => <Language key={key}>{language}</Language>)}</Flex>
    </div>
    </Project>)}
    </ProjectGroup>
</Layout>
)

export const query = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "projects-page" }}){
      html
      frontmatter {
        title
        projects{
          title
          description
          thumbnail
          completed
          languages
        }
      }
    }
  }
`;

export default ProjectsPage
