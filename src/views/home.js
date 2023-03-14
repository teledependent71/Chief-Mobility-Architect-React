import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Mobility Architect</title>
        <meta property="og:title" content="Chief Mobility Architect" />
      </Helmet>
    </div>
  )
}

export default Home
