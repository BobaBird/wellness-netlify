import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favIcon from '../../static/favImage.png'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import '../layouts/index.css'
import { StaticQuery } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery 
  query ={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favIcon}` }
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          // maxWidth: 960,
          // padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
      </div>
      <Footer />
    </>
    )
  }
  />
)

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
