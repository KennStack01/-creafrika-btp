import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IoIosDownload } from 'react-icons/io'
import { StaticImage } from "gatsby-plugin-image"


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
            <div className="mx-auto my-20">
                {services.map((service) => (
                    <div className="mx-auto w-full">
                        {/* <h1 className=" text-xl font-semibold z-10"> {service.nomDuService} </h1> */}
                        {/* <StaticImage
                            src={`${service.imageDuService.fluid.src}`}
                            width={300}
                            quality={95}
                            placeholder="blurred"
                            layout="fixed"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt={service.imageDuService.description}
                            className="relative"
                        /> */}

                        <div class="relative">
                            <img 
                            src={service.imageDuService.fluid.src}
                            width={450}
                            loading="lazy"
                            placeholder="blurred"
                            className="mx-auto relative inset-0 bg-cover bg-center z-0 filter brightness-50"
                            />
                            {/* <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3c/JumanjiTheNextLevelTeaserPoster.jpg')"></div> */}
                            <h1 className="absolute mt-14 inset-0 flex justify-center items-center text-white text-xl font-semibold z-10"> {service.nomDuService} </h1>
                            {/* <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div> */}
                        </div>


                        {/* <img 
                            src={service.imageDuService.fluid.src}
                            width={400}
                            loading="lazy"
                            placeholder="blurred"
                            className="relative"
                        /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default Main
