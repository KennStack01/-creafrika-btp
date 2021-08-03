import React from 'react'
import { IoDownload } from 'react-icons/io'
import Form from './Form'

const Main = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-semibold mx-2 text-gray-600 mt-20">Vous satisfaire est notre Priorité Première</h1>
            <div>
                <div className="text-gray-600">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center my-4 md:my-8"> 
                        🤝 <span className="bg-curious-blue-500 text-white">Travaillons</span> Ensemble!
                    </h1>
                    <p className="text-md md:text-xl font-semibold text-center my-10 mx-5 md:mx-auto">
                        Nous sommes disponibles pour vous apporter notre expertise 💬
                    </p>
                </div>
                <Form/>
            </div>
        </div>
    )
}

export default Main
