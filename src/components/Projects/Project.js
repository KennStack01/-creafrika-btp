import React from 'react'
import { Link } from 'gatsby'

const Project = ({picture, name, location, slug}) => {
    return (
        <Link to={`${slug}`} className="m-3">
            <div className="w-80 md:w-72 mx-auto pb-2 rounded shadow hover:shadow-lg">
                <img 
                    src={picture} 
                    alt="Le Projet" 
                    loading="lazy"
                    placeholder="blurred"
                    className=""
                />
                <div className="mx-auto mt-4 mb-10 text-gray-700">
                    <h1 className="font-semibold"> {name} </h1>
                    <p className="text-xs font-medium text-gray-700"> {location} </p>
                </div>
                <div className="my-3">
                    <Link to={`${slug}`} className="px-3 py-2 rounded bg-curious-blue-500 hover:bg-curious-blue-600 text-white font-medium mx-auto">
                        Découvrir
                    </Link>
                </div>
            </div>
        </Link>
    )
}

export default Project
