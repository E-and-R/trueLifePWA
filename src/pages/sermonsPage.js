import React from "react"
import SEO from "../components/seo"
import Footer from '../components/footer';
import Header from '../components/header'
import Player from '../components/player';

const SermonsPage = () => (
  <div style={{maxWidth:'100%', overflowX:'hidden'}}>
    <SEO title="Sermons" />
    <Header/>
    <Player/>
    <Footer/>
  </div>
)

export default SermonsPage
