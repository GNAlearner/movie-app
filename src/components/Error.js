import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="errorPage">
      <h1>Page Not Found</h1>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      <NavLink className="getback-btn" to="/">Get back</NavLink>
    </div>
  )
}

export default Error