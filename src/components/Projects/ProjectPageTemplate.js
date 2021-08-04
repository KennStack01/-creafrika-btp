import React from 'react'
import { graphql } from 'gatsby'

const ProjectPageTeamplate = ({ data }) => {

    const myProject = data.contentfulProject
    const descriptionProjet = JSON.parse(myProject.descriptionDuProjet.internal.content)
    let countKeyForPictures = 0

    return (
        <div>
            <h1 className="text-2xl font-semibold"> {myProject.nomDuProjet} </h1>
            <img 
                src={myProject.imagePrincipale.file.url} 
                alt="Le Projet" 
                loading="lazy"
                placeholder="blurred"
                className=" mx-auto"
            />
            <div>
                <h2> Année: {myProject.dateDuProjet} </h2>
                <h2> Localisation: {myProject.localisation} </h2>
            </div>
            <p> {descriptionProjet.Description} </p>

            <h1 className="mx-auto font-semibold text-xl"> En Images... </h1>
            <div>
                {myProject.multiplesImages.map((image) => (
                    <img 
                        src={image.file.url} 
                        key={countKeyForPictures++} 
                        alt="Le Projet" 
                        loading="lazy" 
                        className="" 
                    />
                ))}
            </div>
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
            dateDuProjet(formatString: "YYYY", locale: "fr")
            multiplesImages {
                file {
                    url
                }
            }
            slug
        }
    }
`
