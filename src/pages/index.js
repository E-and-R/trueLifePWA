import React from "react"
import Annoucement from '../components/announcements'
import SEO from "../components/seo"
import Calendar from "../components/calendar"
import SermonPlayer from '../components/sermonPlayer';
import AboutUs from '../components/aboutus';
import Footer from '../components/footer';
import Header from '../components/header'
import LandingBanner from '../components/landingBanner';
import Player from '../components/player';

console.log(process.env.GATSBY_GOOGLE_API_KEY)
const IndexPage = () => (
  <div style={{maxWidth:'100%', overflowX:'hidden'}}>
    <SEO title="Home" />
    <Header/>
    <LandingBanner/>
    <Player/>
    <Annoucement/>
    <Calendar/>
    <AboutUs/>
    <Footer/>
  </div>
)

export default IndexPage
