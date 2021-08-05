import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const ProjectPageTeamplate = ({ data }) => {

    const myProject = data.contentfulProject
    const descriptionProjet = JSON.parse(myProject.descriptionDuProjet.internal.content)
    let countKeyForPictures = 0

    return (
        <Layout>
            <h1 className="text-2xl font-semibold mx-auto mt-10 text-curious-blue-600"> {myProject.nomDuProjet} </h1>
            <img 
                src={myProject.imagePrincipale.file.url} 
                alt="Le Projet" 
                loading="lazy"
                placeholder="blurred"
                className="w-96 md:w-3/4 mx-auto mt-6 rounded md:rounded-lg shadow-md"
            />
            <div className="flex flex-row justify-between mx-4 md:mx-40 my-3 text-gray-600">
                <h2> Année: {myProject.dateDuProjet} </h2>
                <h2> Localisation: {myProject.localisation} </h2>
            </div>
            <p className="text-gray-700 text-justify mx-4 md:mx-36 my-6"> {descriptionProjet.Description} </p>

            <h1 className="mx-auto font-semibold text-xl"> En Images... </h1>
            <div className="mx-auto md:grid grid-cols-3">
                {myProject.multiplesImages.map((image) => (
                    <img 
                        src={image.file.url} 
                        key={countKeyForPictures++} 
                        alt="Le Projet" 
                        loading="lazy" 
                        className="w-96 m-4" 
                    />
                ))}
            </div>
        </Layout>
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
