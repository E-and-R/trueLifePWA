import React from "react";
import SEO from "../components/seo";
import Footer from '../components/footer';
import Header from '../components/header';
import Annoucement from '../components/announcements';

const SermonsPage = () => (
  <div style={{maxWidth:'100%', overflowX:'hidden'}}>
    <SEO title="Announcements" />
    <Header/>
    <Annoucement/>
    <Footer/>
  </div>
)

export default SermonsPage
