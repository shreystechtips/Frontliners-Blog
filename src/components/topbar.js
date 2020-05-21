import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function TopBar(props) {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          to="/"
          component={Link}
          edge="start"
          className={classes.menuButton}
          style={{ boxShadow: `none`, color: "white" }}
        >
          {/* <NoteIcon /> */}
          <StaticQuery
            query={pageQuery}
            render={data => (
              <Img
                fluid={data.indexImage.childImageSharp.fluid}
                style={{ width: 30 }}
              />
            )}
          />
        </IconButton>
        <Typography
          to="/"
          component={Link}
          variant="h6"
          className={classes.title}
          style={{ textDecoration: `none`, boxShadow: `none`, color: "white" }}
        >
          Support Frontliners Blog
        </Typography>
        <StaticQuery
          query={pageQuery}
          render={data => (
            <Button
              onClick={() => {
                window.open(data.site.siteMetadata.social.mainSite)
              }}
              color="inherit"
              style={{
                textDecoration: `none`,
                boxShadow: `none`,
                color: "white",
              }}
            >
              Main Site
            </Button>
          )}
        />
      </Toolbar>
    </AppBar>
  )
}

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "logo512-white.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        social {
          mainSite
        }
      }
    }
  }
`
