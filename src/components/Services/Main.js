import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IoIosDownload } from 'react-icons/io'


export default function Main() {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulService {
                edges {
                    node {
                        nomDuService
                        imageDuService {
                            fluid {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)

    const service = data.allContentfulService.edges.map(({node}) => node)

    return (
        <div className="">
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 text-gray-600 mt-16">Vous satisfaire est notre Priorité Première</h1>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Le changement peut ne pas apporter de croissance 
                mais il n'y a pas de croissance sans changement : 
                La croissance d’une civilisation dépend aussi 
                du changement architectural apportée dans cette communauté.
            </p>

            <div className="transform transition duration-500 hover:scale-110 my-14">
                <div className="flex flex-row mx-auto w-80 p-2 bg-curious-blue-500 font-medium py-4 md:py-2 text-lg hover:bg-curious-blue-600 text-white my-14">
                    <h1 className="my-auto ml-5">
                        Nos Prestations de Service
                    </h1>
                    <div className="text-white text-3xl my-auto" >
                        <IoIosDownload/>
                    </div>
                </div>
            </div>

            {/* Les Services */}
            <div>
                <div>
                    <h1></h1>
                    
                </div>
            </div>
        </div>
    )
}

// export default Main
