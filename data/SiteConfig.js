const config = {
  siteTitle: "Xecurter.io", 
  siteTitleShort: "Xecuter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: ["Executer", "Xcutier"], 
  siteLogo: "/logos/logo-1024.png", 
  siteUrl: "https://wwww.Xecuter.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The official hub for the Xecuter cryptocurrency trading solution", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", 
  siteRssTitle: "Xecuter.io RSS feed", 
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Patrick Kelley", // Username to display in the author segment.
  userEmail: "xecuter_io@protonmail.com.com", // Email used for RSS feed's author segment
  userTwitter: "@Xecuter_IO", // Optionally renders "Follow Me" in the UserInfo segment.
  userAvatar: "https://pbs.twimg.com/profile_images/1229951926630060032/dN6h4p6B_400x400.png", // User avatar to display in the author segment.
  userDescription: "",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Xecuter_IO",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:xecuter_io@protonmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
