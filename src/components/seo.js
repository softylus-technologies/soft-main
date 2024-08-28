import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, title, image, url, children }) {
  const metaDescription = description;

  function setGoogleAnalytics() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JVJ8H4Y7SN');
      `
    };
  }

  return (
    <>
      <title>{`${title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Kufi+Arabic:wght@100..900&family=Readex+Pro:wght@160..700&display=swap" rel="stylesheet" />
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JVJ8H4Y7SN"></script>
      <script dangerouslySetInnerHTML={setGoogleAnalytics()} />
      {children}
    </>
  );
}

export default Seo;
