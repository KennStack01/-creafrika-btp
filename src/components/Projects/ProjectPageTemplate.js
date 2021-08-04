import React from 'react'
import { graphql } from 'gatsby'

const ProjectPageTeamplate = ({ data }) => {
    return (
        <div>
            <h1> Hello World! </h1>
        </div>
    )
}

export default ProjectPageTeamplate

export const query = graphql`
    query ($slug: String!)  {
        contentfulProject (slug: {eq: $slug}) {
            imagePrincipale {
                file {
                    url
                }
            }
            nomDuProjet
            localisation
            descriptionDuProjet {
                internal {
                    content
                }
            }
            dateDuProjet
            multiplesImages {
                file {
                    url
                }
            }
            slug
        }
    }
`
