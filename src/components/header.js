import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import HeaderTest from './HeaderTest'


const Header = () => {
  return (
    <div className="bg-white shadow-sm backdrop-filter backdrop-blur-lg pt-1 top-0 z-50">
      <HeaderTest/>
    </div>
  )
}

export default Header
