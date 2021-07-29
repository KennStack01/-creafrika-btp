import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => {
    return (
        <Layout>
            <Seo title="Creafrika" description="Page not found"/>
            <h1>Not Found :(</h1>
        </Layout>
    )
}

export default NotFound