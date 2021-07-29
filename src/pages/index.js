import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from "../components/Home/Main"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Creafrica BTP, Cabinet d’architecture et de Génie-civil"/>
      <Main/>
  </Layout>
)

export default IndexPage
