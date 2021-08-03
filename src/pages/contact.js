import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Contact/Main'

const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact" description="Creafrica BTP, Nous contacter"/>
            <Main/>
        </Layout>
    )
}

export default Contact