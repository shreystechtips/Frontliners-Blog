import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import {
  makeStyles,
  withStyles,
  Typography,
  ThemeProvider,
  Grid,
  Paper,
} from "@material-ui/core"
import theme from "../components/palette"
import Center from "react-center"
const useStyles = theme => ({
  landingTop: {
    minHeight: 100,
    height: "50vh",
    maxHeight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
    // backgroundColor: "black",
  },
  root: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 20,
    backgroundColor: theme.palette.dark,
    maxWidth: 300,
  },
})

const BkImg = () => <BackgroundImage>Test</BackgroundImage>
class Blog extends React.Component {
  render() {
    const { data, classes } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={classes.landingTop}>
          <BackgroundImage
            fluid={data.indexImage.childImageSharp.fluid}
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              filter: "brightness(150%)",
              borderBottom: "5px solid #08808E",
            }}
          >
            {/* <Typography
              variant="h3"
              style={{
                color: "white",
                // background: { BkImg },
              }}
            >
              Hello
            </Typography> */}
          </BackgroundImage>
        </div>
        <div id="content" style={{ padding: `0 ${rhythm(3 / 4)}` }}>
          <Bio />
          <div style={{ margin: "20px 0 40px" }} className={classes.root}>
            <Grid container spacing={3}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <Grid item>
                    <Paper elevation={4} className={classes.paper}>
                      <div key={node.fields.slug}>
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          <Link
                            style={{ boxShadow: `none` }}
                            to={`${node.fields.slug}`}
                          >
                            {title}
                          </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </div>
                    </Paper>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(useStyles)(Blog)

// const bg = graphql`
//   query {

// `

// file(absolutePath: { regex: "/Notes_Images.jpeg/" }) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    indexImage: file(relativePath: { eq: "Notes-Image.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
