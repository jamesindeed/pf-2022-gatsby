import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
          }
        }
      }
    `
  )

  const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <html lang="en" />

      <meta name="msapplication-TileColor" content="#f5f5f5" />

      <meta name="description" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <link
        href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@100;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@100;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Head.defaultProps = {
  title: null,
  description: null,
}
