import React from 'react'

const Form = () => {
    return (
        <div className="text-gray-600">
            <h1 className="text-2xl font-semibold mt-3"> 
                <span className="bg-turbo-500">Ecrivez-nous </span> 👔
            </h1>
            <div className="flex items-center w-full">
                <div class="w-full bg-white rounded shadow p-8 m-4 md:max-w-sm md:mx-auto">
                    <form class="mb-4 md:flex md:flex-wrap md:justify-between"  method="post" action={`https://getform.io/f/8ddca5d3-daac-449c-97d2-3debd4ad0c8e`}>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 tracking-wide font-bold text-lg text-grey-darkest" for="first_name">Votre Nom Complet</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="text" name="first_name" id="first_name" placeholder="Credo Lokossou" required/>
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="email">Adresse e-mail</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="email" name="email" id="email"  placeholder="creafrikagroup@gmail.com" required/>
                        </div>
                        {/* <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 tracking-wide font-bold text-lg text-grey-darkest" for="business_name">Votre Entreprise</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="text" name="business_name" id="business_name" placeholder="Modern Shop Company"/>
                        </div> */}
                        {/* <div class="flex flex-col mb-4 md:w-full">
                            <div class="mt-4">
                                <span class="mb-2 font-bold text-lg text-grey-darkest">Project Type</span>
                                <div class="mt-2 grid grid-cols-2 text-sm font-normal">
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="E-Commerce"/>
                                        <span className="ml-2 cursor-pointer">E-Commerce</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Marketing"/>
                                        <span className="ml-2 cursor-pointer">Marketing</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Business"/>
                                        <span className="ml-2 cursor-pointer">Business</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Product"/>
                                        <span className="ml-2 cursor-pointer">Product</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Landing"/>
                                        <span className="ml-2 cursor-pointer">Landing Page</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Other"/>
                                        <span className="ml-2 cursor-pointer">Other Type</span>
                                    </label>
                                </div>
                            </div>
                        </div>       */}

                        {/* <div class="mt-8">
                                <span class="mb-2 font-bold text-lg text-grey-darkest">Expected Budget</span>
                                <div class="mt-2 grid grid-cols-2 text-sm font-normal">
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="1-5K"/>
                                        <span className="ml-2 cursor-pointer"> $1K - $5K</span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="5-10K"/>
                                        <span className="ml-2 cursor-pointer"> $5K - $10K </span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="10-15K"/>
                                        <span className="ml-2 cursor-pointer"> $10K - $15K </span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="15-20K"/>
                                        <span className="ml-2 cursor-pointer"> $15K - $20K </span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="20K+"/>
                                        <span className="ml-2 cursor-pointer"> $20K + </span>
                                    </label>
                                    <label class="inline-flex items-center ml-1">
                                        <input type="radio" className="form-radio cursor-pointer" name="accountType" value="Other"/>
                                        <span className="ml-2 cursor-pointer"> Other price</span>
                                    </label>
                                </div>
                        </div>                   */}
                                    
                        <div className="flex flex-col mt-5 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="message">Comment pouvons-nous vous aider?</label>
                            <textarea name="message" id="message"  className="resize-none p-2 h-36 border rounded focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" placeholder="Nous sommes ici pour vous accompagner dans vos projets, avec notre expertise." rows="4" required></textarea>
                        </div>

                        <div className="mt-10 mx-auto transform transition duration-500 hover:scale-110">
                            <button type="submit" className="text-white bg-curious-blue-600 font-bold py-4 md:py-2 px-6 text-xl hover:text-turbo-400">Envoyez🚀</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form