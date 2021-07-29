import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
    return (
        <div>
            <StaticImage
                src='../../images/creafrika-btp.png'
                width={300}
                quality={95}
                placeholder="blurred"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Creafrika Logo"
                className="mx-auto my-10"
            />
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 text-gray-600"> Cabinet d’architecture et de Génie-civil </h1>
        </div>
    )
}

export default Hero
