import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IoIosDownload } from 'react-icons/io'
import { Link } from 'gatsby'


export default function Main() {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulService(sort: {fields: createdAt}) {
                edges {
                    node {
                        nomDuService
                        imageDuService {
                            fluid {
                                src
                            }
                            description
                        }
                    }
                }
            }
        }
    `)

    const services = data.allContentfulService.edges.map(({node}) => node)

    return (
        <div className="">
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 text-gray-600 mt-16">Vous satisfaire est notre priorité première</h1>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Le changement peut ne pas apporter de croissance 
                mais il n'y a pas de croissance sans changement : 
                La croissance d’une civilisation dépend aussi 
                du changement architectural apportée dans cette communauté.
            </p>

            <div className="my-14">
                <div className="flex flex-row mx-auto w-80 p-2 bg-curious-blue-500 font-medium py-4 md:py-2 text-lg text-white my-14">
                    <h1 className="my-auto ml-5 font-semibold">
                        Nos Prestations de Service
                    </h1>
                    <div className="text-white text-3xl my-auto" >
                        <IoIosDownload/>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-20 md:grid grid-cols-2">
                {services.map((service) => (
                    <div className="w-full mx-auto my-10 md:w-3/4 relative">
                            <img 
                            src={service.imageDuService.fluid.src}
                            loading="lazy"
                            placeholder="blurred"
                            className="mx-auto relative inset-0 bg-cover bg-center z-0 filter brightness-50"
                            />
                            <h1 className="absolute w-90 mx-auto mt-14 inset-0 flex justify-center items-center text-white text-2xl font-semibold z-10"> {service.nomDuService} </h1>
                    </div>
                ))}
            </div>
            <div className="mt-8 mb-10 transform transition duration-500 hover:scale-110 my-12">
                <Link to="/projects" className="p-3 bg-curious-blue-500 font-semibold py-4 md:py-2 px-3 text-2xl hover:bg-curious-blue-600 text-white my-20">
                    Découvrir nos Projets
                </Link>
            </div>
        </div>
    )
}

// export default Main
