import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './pages.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Bridge!</h1>
    <p>This is the gatsby boilerplate</p>
    
    <div style={{ maxWidth: `800px`, marginBottom: `6rem`, position:`relative` }}>
      <Image />
      <div className="buzz buzz1">GatsbyJS</div>
      <div className="buzz buzz2">GraphQL</div>
      <div className="buzz buzz3">Netlify</div>
      <div className="buzz buzz4">JAMstack</div>
     

    </div>
    <Link className="navLink" to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
