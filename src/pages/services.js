import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main  from "../components/Services/Main"

const Services = () => {
    return (
        <Layout>
            <Seo title="Services" description="Creafrica BTP, Découvrir vos Services"/>
            <Main/>
        </Layout>
    )
}

export default Services
