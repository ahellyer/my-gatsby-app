import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css'

const ThirdPage = () => (
    <Layout>
        <SEO title="Page three" />
        <h1>Getting started...</h1>
        <p className="commandLine">npm install --global gatsby-cli</p>
        <p className="commandLine">gatsby new gatsby-site</p>
        <p className="commandLine">cd gatsby-site</p>
        <p className="commandLine">gatsby develop</p>
        <p className="commandLine">gatsby build</p>
        
        <Link className="navLink" to="/">Go back to the homepage</Link>
    </Layout>
)

export default ThirdPage;