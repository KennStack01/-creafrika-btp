import React from 'react'
import { IoIosDownload } from 'react-icons/io'

export default function Main() {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 mt-10 text-gray-600">Vous satisfaire est notre Priorité Première</h1>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Découvrez quelques uns de nos Projets...
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
        </div>
    )
}

