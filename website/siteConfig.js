/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/header-logo.svg",
    infoLink: "https://sider.review/",
    pinned: true,
  },
];

const siteConfig = {
  title: "Sider Documentation",
  tagline: "Documentation pages for Sider usage.",
  url: "https://help.sider.review/",
  baseUrl: "/",
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "sider-docs",
  organizationName: "sider",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: "049a35b7a22ba1310e14ad116d32c18b",
    indexName: "sider",
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "enterprise", label: "Enterprise" },
    { page: "news/2020", label: "News" },
    { href: "https://sider.review/", label: "Sider Top" },
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/header-logo.svg",
  footerIcon: "img/footer-logo.svg",
  favicon: "img/favicon/favicon.ico",

  /* Colors for website */
  colors: {
    primaryColor: "#475466",
    secondaryColor: "#2E3B4D",
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Sider, Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js",
  ],

  stylesheets: ["/css/code-block-buttons.css"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/og_thumb.png",
  twitterImage: "img/og_thumb.png",

  // See: https://docusaurus.io/docs/en/site-config#docsurl-string
  docsUrl: "",

  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/sider/sider-docs",
  // wrapPagesHTML: true,

  editUrl: "https://github.com/sider/sider-docs/edit/master/docs/",

  gaTrackingId: "UA-48995135-1",
};

module.exports = siteConfig;
