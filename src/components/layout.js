/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer
        style={{ backgroundColor: "hsla(169, 100%, 16%, 1)" }}
        className="py-5 text-white"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 114 26.6"
            className="logo "
            width="8rem"
            fill="var(--logo-color, white)"
          >
            <path d="M32.4 8.1h2.9v11.7h-2.9V8.1zm4 7.3c0-2.9 1.8-4.6 4.5-4.6s4.5 1.7 4.5 4.6-1.7 4.7-4.5 4.7-4.5-1.7-4.5-4.7zm6.2 0c0-1.6-.6-2.5-1.6-2.5s-1.6.9-1.6 2.5.6 2.5 1.6 2.5 1.6-.8 1.6-2.5zm4 5h2.8c.3.6.9 1 1.6.9 1.1 0 1.7-.6 1.7-1.5v-1.6c-.5 1-1.6 1.7-2.7 1.6-2.1 0-3.5-1.6-3.5-4.4s1.3-4.5 3.6-4.5c1.2-.1 2.3.6 2.7 1.7h-.1V11h2.9v8.8c0 2.1-1.9 3.4-4.6 3.4-2.6 0-4.2-1.1-4.4-2.8zm6-5c0-1.4-.6-2.3-1.7-2.3s-1.7.9-1.7 2.3.6 2.2 1.7 2.2 1.7-.7 1.7-2.2zm4 0c0-2.9 1.8-4.6 4.5-4.6s4.5 1.7 4.5 4.6-1.7 4.7-4.5 4.7-4.4-1.7-4.5-4.7zm6.2 0c0-1.6-.6-2.5-1.6-2.5s-1.6.9-1.6 2.5.6 2.5 1.6 2.5 1.6-.8 1.6-2.5zm4-6.5c0-.8.6-1.5 1.4-1.5.8 0 1.5.6 1.5 1.4 0 .8-.6 1.5-1.4 1.5h-.1c-.7 0-1.4-.6-1.4-1.4zm0 2.1h2.9v8.9h-2.9V11zm13.5 4.4c0 2.9-1.3 4.6-3.5 4.6-1.2.1-2.2-.6-2.7-1.6H74v4.4h-2.9V11H74v1.6c.4-1.1 1.5-1.8 2.7-1.7 2.3 0 3.6 1.6 3.6 4.5zm-3 0c0-1.4-.7-2.3-1.7-2.3s-1.7.9-1.7 2.3.6 2.3 1.7 2.3 1.8-.8 1.7-2.3zm7.9-4.6c2.4 0 3.9 1.1 3.9 3h-2.6c0-.6-.5-1-1.3-1s-1.2.2-1.2.7c0 .5.3.6 1 .7l1.9.4c1.8.4 2.5 1.1 2.5 2.4 0 1.8-1.7 3-4.1 3s-4.1-1.2-4.2-3h2.8c.1.7.6 1 1.4 1s1.2-.3 1.2-.7c0-.5-.3-.6-1-.7l-1.7-.4c-1.7-.4-2.6-1.3-2.6-2.6.1-1.7 1.6-2.8 4-2.8zM99 19.9h-2.8v-1.7h-.1c-.3 1.1-1.4 1.9-2.6 1.8-1.7.1-3.1-1.3-3.2-3v-6h2.9v5.1c0 1 .5 1.6 1.4 1.6.8 0 1.5-.7 1.5-1.5V11H99v8.9zm1.4-8.9h2.8v1.7h.1c.3-1.1 1.4-1.9 2.5-1.9 1.2-.1 2.3.7 2.5 1.9h.1c.4-1.2 1.5-1.9 2.7-1.9 1.5-.1 2.9 1.1 2.9 2.7v6.3h-2.9v-5.3c0-.9-.4-1.4-1.2-1.4-.7 0-1.3.5-1.3 1.2v5.5h-2.8v-5.3c0-.9-.4-1.4-1.2-1.4-.7 0-1.3.6-1.3 1.3v5.4h-2.9V11zM26.7 8.9c0-4.9-4-8.9-8.9-8.9-2.5 0-4.9 1-6.6 2.9H0v23.7h23.7V15.5c1.9-1.7 3-4.1 3-6.6zm-4.6 0c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3zM19.2 22H4.6V7.4H9c-.1.5-.1 1-.1 1.4 0 4.9 4 8.9 8.9 8.9.5 0 .9 0 1.4-.1V22z" />
          </svg>
        </div>
        <div className="text-center mt-3">
          © 2020 Company Name. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Layout
