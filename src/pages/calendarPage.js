import React from "react";
import SEO from "../components/seo";
import Footer from '../components/footer';
import Header from '../components/header';
import Calendar from "../components/calendar"

const SermonsPage = () => (
  <div style={{maxWidth:'100%', overflowX:'hidden'}}>
    <SEO title="Announcements" />
    <Header/>
    <Calendar/>
    <Footer/>
  </div>
)

export default SermonsPage
