import React, {useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export function useMetadata(){
    const data = useStaticQuery(graphql`
        query SiteMetadata{
            site {
              siteMetadata {
                footer
                title
                meta
              }
            }
          }
    `);
    return data.site.siteMetadata;
}

export function useToggle(defaultValue = false){
    const [value, setValue] = useState(defaultValue);
    return [value, () => setValue(!value)];
}