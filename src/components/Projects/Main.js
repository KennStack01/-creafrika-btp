import React from 'react'
// import { IoDownload } from 'react-icons/io'

export default function Main() {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 text-gray-600">Vous satisfaire est notre Priorité Première</h1>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Le changement peut ne pas apporter de croissance 
                mais il n'y a pas de croissance sans changement : 
                La croissance d’une civilisation dépend aussi 
                du changement architectural apportée dans cette communauté.
            </p>

            <div className="transform transition duration-500 hover:scale-110 my-14">
                <div className="flex flex-row mx-auto w-72 p-2 bg-curious-blue-500 font-medium py-4 md:py-2 text-lg hover:bg-curious-blue-600 text-white my-14">
                    Rencontrer notre équipe
                    <div className="text-white text-3xl" >
                        {/* <IoDownload/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default Main
