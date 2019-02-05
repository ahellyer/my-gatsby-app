import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image2 from "../components/image2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Key features:</h1>
    <ul>
      <li>Static Site Generator</li>
      <li>Ships with a lot of best practices "out of the box" - eg. code-splitting which = fast load speeds</li>
      <li>Designed so that you can easily connect to your data with GraphQL</li>
      
    </ul>
    <div style={{ maxWidth: `600px`, marginBottom: `2rem`, position: `relative` }}>
      <Image2 />
    </div>
    
    <Link className="navLink"  to="/">Go back to the homepage</Link>
    <Link className="navLink" to="/page-3">Go page 3</Link>
  </Layout>
)

export default SecondPage
