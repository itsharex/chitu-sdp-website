const nav = require("./nav.js");

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  logo: "/image/nav-logo.png",
  searchMaxSuggestions: 10,
  lastUpdated: "上次更新",

  // Vdoing Theme Config
  sidebar: { mode: "structuring", collapsable: true },

  updateBar: {
    showToArticle: false
  },

  category: false,
  tag: false,
  archive: true,

  author: {
    name: "赤兔实时计算团队"
  },

  footer: {
    createYear: 2023,
  },
};
