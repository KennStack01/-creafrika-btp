import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main  from "../components/Services/Main"


export default function Services() {
    return (
        <div>
            <Layout>
                <Seo title="Services" description="Creafrica BTP, Découvrir Nos Services"/>
                <Main/>
            </Layout>
        </div>
    )
}

// export default Services
