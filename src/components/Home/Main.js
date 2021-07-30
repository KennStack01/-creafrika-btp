import React from 'react'
import Hero from './Hero'
import { Link } from 'gatsby'
// import { IoArrowForwardCircle } from 'react-icons/io'

const Main = () => {
    return (
        <div>
            <Hero/>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Le changement peut ne pas apporter de croissance 
                mais il n'y a pas de croissance sans changement : 
                La croissance d’une civilisation dépend aussi 
                du changement architectural apportée dans cette communauté.
            </p>
            <div className="transform transition duration-500 hover:scale-110 my-12">
                <Link to="/contact" className="p-3 bg-curious-blue-500 font-bold py-4 md:py-2 px-3 text-2xl hover:bg-curious-blue-600 text-white my-20">
                    Contactez-nous!
                </Link>
            </div>

            <div className="flex flex-col">
                <h1 className="text-xl md:text-3xl font-bold text-gray-700 mt-10">A propos</h1>
                <p className="text-justify md:text-lg md:text-center mx-5 my-2 md:mx-60">
                    Creafrika-BTP est une entreprise de construction qui est chargée 
                    de suivre minutieusement votre ouvrage depuis la conception jusqu’à la finition
                    Nous changeons vos idées et pensées en des espaces et formes mémorables.
                    Nous créons des espaces époustouflants qui élèvent l'esprit humain 
                    et inspirent tous ceux qui les rencontrent.
                </p>
            </div>
            
            <div className="mt-8 mb-10">
                <Link to="/services" className="p-3 bg-curious-blue-500 font-semibold py-4 md:py-2 px-3 text-xl hover:bg-curious-blue-600 text-white my-20">
                    Découvrir nos Services
                </Link>
            </div>

        </div>
    )
}

export default Main
