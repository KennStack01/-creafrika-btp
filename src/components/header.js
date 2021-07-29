import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"


const Header = () => {
  return (
    <div className="flex flex-row justify-between shadow-sm backdrop-filter backdrop-blur-lg pt-2 sticky top-0 z-10">
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
    </div>
  )
}

export default Header
