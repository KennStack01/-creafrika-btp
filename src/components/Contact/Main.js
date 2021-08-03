import React from 'react'
import { IoDownload } from 'react-icons/io'
import Form from './Form'

import { 
    IoLogoLinkedin,
    IoMailUnreadOutline
} from 'react-icons/io5'

import { ImBehance2 } from 'react-icons/im'
import { 
    FaWhatsappSquare, 
    FaPhoneSquare,
    FaInstagram
} from 'react-icons/fa'

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
                <div className="">
                    <Form/>
                    <div>
                        {/* Logos Social Media */}
                        <p className="text-md md:text-xl font-semibold text-center my-10 mx-5 md:mx-auto">
                            Retrouvez-nous 💬
                        </p>
                        <div className="flex flex-row justify-evenly md:justify-evenly my-7 font-semibold p-5 shadow rounded md:mx-36">
                                <a href="https://www.linkedin.com/in/komi-cr%C3%A9do-lokossou-3192591b3"  target="__blank" className="flex flex-row justify-center text-gray-600">
                                    <div className="text-2xl lg:text-3xl">
                                        <IoLogoLinkedin />
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">LinkedIn</h1>
                                </a>
                                <a href="mailto:creafrikagroup@gmail.com" target="__blank" className="flex flex-row justify-center text-gray-600 my-5">
                                    <div className="text-2xl lg:text-3xl">
                                        <IoMailUnreadOutline/>
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">E-mail</h1>
                                </a>
                                <a href="https://www.behance.net/credolokossou" target="__blank" className="flex flex-row justify-center text-gray-600 ">
                                    <div className="text-2xl lg:text-3xl">
                                        <ImBehance2/>
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Behance</h1>
                                </a>
                                <a href="https://www.instagram.com/invites/contact/?i=58i02ctef785&utm_content=mj40uol" target="__blank" className="flex flex-row justify-center text-gray-600 my-5">
                                    <div className="text-2xl lg:text-3xl">
                                        <FaInstagram/>
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">Instagram</h1>
                                </a>
                                <a href="https://wa.me/8613681259863" target="__blank" className="flex flex-row justify-center text-gray-600 my-5">
                                    <div className="text-2xl lg:text-3xl">
                                        <FaWhatsappSquare/>
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">WhatsApp 1</h1>
                                </a>
                                <a href="https://wa.me/22899337961" target="__blank" className="flex flex-row justify-center text-gray-600 my-5">
                                    <div className="text-2xl lg:text-3xl">
                                        <FaWhatsappSquare/>
                                    </div>
                                    <h1 className="text-xs mt-1 mx-1 font-sans lg:text-sm">WhatsApp 2</h1>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
