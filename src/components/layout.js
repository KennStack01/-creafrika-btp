/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Header from "./header"
// import "./layout.css"


const styles = {
    layoutContent: 'text-center flex flex-col h-screen',
    children: 'flex-grow z-0',
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={styles.layoutContent} style={ { fontFamily: "Gontserrat" } }>
          <div className="top-0 z-50">
            <Header />
          </div>
          <main className={styles.children}>
            { children }
          </main>
          <footer className="text-xs text-white bg-turbo-500 w-full h-4 bg-curious-blue-800 mt-20">
              © {new Date().getFullYear()}, Creafrika Group | Built with  
              {` `}
            💖 by <a href="https://www.webcontract.io" target="_blank" rel="noreferrer" className="font-medium border-blue-20 border-b-2 hover:border-turbo-900"> Kenn Kibadi </a>
            - <span className="font-medium"> WebContract.io </span> 
          </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
