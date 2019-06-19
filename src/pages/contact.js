import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout'
import SEO from '../components/seo'

const Link = styled.a`
    text-decoration: none;
    color: #34495e;
    &:hover{
        text-decoration: underline;
    }
`;

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" keywords={['web', 'development', 'react', 'full', 'stack']} />
        <h1>Contact</h1>
        <p>If you are in need of a professional, modern website or require a more bespoke technical solution, please do not hesitate to contact me below:</p>
        <p>Email: <Link href="mailto:will@willmann.me.uk">will@willmann.me.uk</Link></p>
        <p>Or feel free to look at my <Link href="https://www.linkedin.com/in/will-mann-265574156/">LinkedIn</Link> profile, or check out some of my code on my <Link href="https://github.com/Will-Mann-16">GitHub</Link>.</p>
    </Layout>
);

export default ContactPage