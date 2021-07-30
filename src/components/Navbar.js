import React from 'react'
import { Link } from "gatsby"


const activeLinkStyles = { color: "white", backgroundColor: "#239FCD", cursor: "pointer", paddingTop: "3px", paddingBottom: "3px", paddingLeft: "12px", paddingRight: "12px" }


const Navbar = () => {
    return (
        <div>
            <div className="flex flex-row md:justify-between text-sm md:text-md md:text-base text-gray-600 font-semibold my-2 invisible md:visible z-10">
                <Link to="/" activeStyle={activeLinkStyles} activeClassName="active" className="hover:text-curious-blue-500 mx-5">Accueil</Link>
                <Link to="/services" activeStyle={activeLinkStyles} activeClassName="active" className="hover:text-curious-blue-500 mx-5">Services</Link>
                <Link to="/projects" activeStyle={activeLinkStyles} activeClassName="active" className="hover:text-curious-blue-500 mx-5">Projects</Link>
                <Link to="/education" activeStyle={activeLinkStyles} activeClassName="active" className="hover:text-curious-blue-500 mx-5">Education</Link>
                <Link to="/contact" activeStyle={activeLinkStyles} activeClassName="active" className="hover:text-curious-blue-500 mx-5">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
