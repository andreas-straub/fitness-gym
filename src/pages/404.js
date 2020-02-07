import React from "react"
import { Helmet } from 'react-helmet'



const NotFoundPage = () => (
  <div className="container">

    <Helmet title="404" />

    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
