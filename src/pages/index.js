import React from "react"
import SEO from "../components/seo"
import Footer from '../components/footer';
import Header from '../components/header'
import LandingBanner from '../components/landingBanner';

const IndexPage = () => (
  <div style={{maxWidth:'100%', overflowX:'hidden'}}>
    <SEO title="Home" />
    <Header/>
    <LandingBanner/>
    
    <Footer/>
  </div>
)

export default IndexPage
