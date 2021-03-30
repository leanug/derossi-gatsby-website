const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/leanug/aerion/derossi/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/portfolio.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/pages/posts.js"))),
  "component---src-templates-category-template-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/templates/category-template.js"))),
  "component---src-templates-portfolio-template-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/templates/portfolio-template.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/home/leanug/aerion/derossi/src/templates/post-template.js")))
}

