import React from "react"
import SEO from "../components/seo"
import Footer from '../components/footer';
import Header from '../components/header'
import LandingBanner from '../components/landingBanner';
import HomeCard from '../components/homeCard';
import { graphql, useStaticQuery } from "gatsby"
import {Grid } from "@material-ui/core"
export default function IndexPage(){
  const data = useStaticQuery(graphql`
  query {
    bible: file(relativePath: { eq: "bible.webp" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mic: file(relativePath: { eq: "mic.webp" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calendar: file(relativePath: { eq: "calendar.webp" }) {
      childImageSharp {
        fluid(maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    people: file(relativePath: { eq: "people.webp" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return(
      <div style={{maxWidth:'100%', overflowX:'hidden'}}>
        <SEO title="Home" />
        <Header/>
        <LandingBanner/>
        <Grid container  spacing={2} style={{textAlign: 'center', justifyContent: 'center',background: "linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}>
            <Grid item md={8} xs={12} style={{textAlign: 'left', justifyContent: 'flex-start'}} >
                <HomeCard image={data.bible.childImageSharp.fluid} title={"Sermons"} subTitle={"Listen To Our Team Of Gifted Speakers, Deliver A Word From The Lord"} href={"/sermonsPage"} buttonName={"Listen to Sermons"} />
            </Grid>
            <Grid item md={8} xs={12} style={{textAlign: 'left', justifyContent: 'flex-start'}} >
                <HomeCard image={data.mic.childImageSharp.fluid} title={"Announcements"} subTitle={"Stay in the know of all church related news"} href={"/announcementsPage"} buttonName={"Read Announcements"} />
            </Grid>
            <Grid item md={8} xs={12} style={{textAlign: 'left', justifyContent: 'flex-start'}} >
                <HomeCard image={data.calendar.childImageSharp.fluid} title={"Calendar"} subTitle={"Keeping you up to date with all church events and services"} href={"/calendarPage"} buttonName={"Find Events"} />
            </Grid>
            <Grid item md={8} xs={12} style={{textAlign: 'left', justifyContent: 'flex-start'}} >
                <HomeCard image={data.people.childImageSharp.fluid} title={"About Us"} subTitle={"Find out more about us"} href={"/aboutPage"} buttonName={"Explore"} />
            </Grid>
            
        </Grid>
        <Footer/>
      </div>
  )
}
