import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { rhythm, scale } from "../utils/typography"
import TopBar from "./topbar.js"
import Center from "react-center"
import theme from "./palette"

const useStyles = makeStyles(theme => ({}))
function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/`
  let header
  return (
    <ThemeProvider theme={theme}>
      <Wrapper style={{ minHeight: "100vh" }}>
        <TopBar />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: `0 0`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer>© {new Date().getFullYear()}, Built with ♡</Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
