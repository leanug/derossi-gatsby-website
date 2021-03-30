const path = require('path') // full path required path.resolve en createpage

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts: allMdx(filter: {frontmatter: {type: {in: "post"}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      portfolio: allMdx(filter: {frontmatter: {type: {in: "portfolio"}}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct( field: frontmatter___category )
      }
    }
  `)
  
  // Todo nodejs stuff no entido nada
  // Esto genera de una todas las pagians programaticamente enviando al slug a post-templates,
  // eligiendo el post con el slug pasado.
  result.data.posts.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })
  result.data.portfolio.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/portfolio/${slug}`,
      component: path.resolve(`src/templates/portfolio-template.js`),
      context: {
        slug,
      },
    })
  })
  result.data.categories.distinct.forEach( category => {
    createPage({
      path: `/${ category }`,
      component: path.resolve( `src/templates/category-template.js` ),
      context: {
        category,
      },
    })
  })
}
