
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {


  const metaDescription = description 


  return (
    <>
      <title>{`${title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator"  />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Kufi+Arabic:wght@100..900&family=Readex+Pro:wght@160..700&display=swap" rel="stylesheet" />



      {children}
    </>
  )
}

export default Seo
