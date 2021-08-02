import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import HeaderTest from './HeaderTest'
// import { RiMenu3Fill } from 'react-icons/ri'


const Header = () => {
  return (
    <div className="bg-white shadow-sm backdrop-filter backdrop-blur-lg pt-1 top-0 z-50">

      <HeaderTest/>
      {/* <div className="flex flex-row justify-between shadow-sm backdrop-filter backdrop-blur-lg pt-2 sticky top-0 z-10">
        <Link to="/" className="flex flex-col mx-auto ml-3 md:ml-5">
          <StaticImage
            src='../images/creafrika-btp.png'
            width={120}
            quality={95}
            placeholder="blurred"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="WebContract Logo"
          />
        </Link>
        <Navbar/>
      </div> */}
      {/* <div className="text-2xl font-bold visible md:invisible text-gray-600 mr-10 cursor-pointer" >
          <RiMenu3Fill/>
      </div> */}
    </div>
  )
}

export default Header
