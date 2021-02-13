module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
