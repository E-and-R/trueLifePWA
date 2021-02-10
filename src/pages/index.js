import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Calendar from "../components/calendar"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Calendar/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </div>
)

export default IndexPage
