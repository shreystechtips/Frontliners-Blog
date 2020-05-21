/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Paper, makeStyles, Typography } from "@material-ui/core"

import { rhythm } from "../utils/typography"

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: 10,
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#C8E8EA",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}))

function Bio() {
  const classes = useStyle()
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Paper className={classes.paper} elevation={4}>
              {/* <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              /> */}
              <Typography variant="h5" style={{ color: "white" }}>
                {/* Follow us on instagram:{" "} */}
                <a
                  href={`https://instagram.com/${social.instagram}`}
                  target="blank"
                  style={{ color: "white", textDecorationLine: "none" }}
                >
                  <strong>Follow us on instagram</strong>
                </a>
              </Typography>
            </Paper>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
