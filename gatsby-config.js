module.exports = {
  siteMetadata: {
    title: `True Life Christian Ministries`,
    description: `Web Home of True Life Christian Minsitries Thabazimbi, Visit to hear an amazing word and be motivated`,
    author: `@Einstein&Robin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-theme-material-ui`,
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./firebase-creds.json"),
        types: [
          {
            type: 'Annoucement',
            collection: 'AnnouncementBook',
            map: doc => ({
              title: doc.title,
              maker: doc.maker,
              details: doc.details,
              target: doc.target,
              date: doc.dateTime,
            }),
          },
          {
            type:'Events',
            collection:'EventsDatabase',
            map: doc => ({
              date: doc.date,
              description: doc.description,
              end: doc.endingTime,
              start: doc.startingTime,
              name: doc.name,
            }),
          },
          {
            type:'Sermon',
            collection:'Sermons',
            map: doc => ({
              image: doc.image,
              src: doc.link,
              speaker: doc.speaker,
              time: doc.time,
              title: doc.title,
            }),
          },
          {
            type:'Event',
            collection:'Events',
            map: doc => ({
              color: doc.color,
              start: doc.start,
              end: doc.end,
              title: doc.title,
            }),
          },
          {
            type:'WeeklyEvent',
            collection:'RepeatingEvents',
            map: doc => ({
              color: doc.color,
              daysOfWeek: doc.days,
              startTime: doc.start,
              endTime: doc.end,
              title: doc.title,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `True Life Christian Ministries`,
        short_name: `True Life`,
        start_url: `/`,
        background_color: `#00B1D2`,
        theme_color: `#00B1D2`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/aboutPage/`, `/sermonsPage/`,`/calendarPage/`, `/announcementsPage/`],
      },
    },
  ],
}
