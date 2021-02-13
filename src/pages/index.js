import React from "react"
import Annoucement from '../components/announcements'
import SEO from "../components/seo"
import Calendar from "../components/calendar"
import SermonPlayer from '../components/sermonPlayer';
import AboutUs from '../components/aboutus';
import Footer from '../components/footer';
import Header from '../components/header'
import LandingBanner from '../components/landingBanner';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header/>
    <LandingBanner/>
    <SermonPlayer/>
    <Annoucement/>
    <Calendar/>
    <AboutUs/>
    <Footer/>
  </div>
)

export default IndexPage
