import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-dark bg-dark navbar-expand-5m">
    <div className="container">
<Link to={'/'} className="navbar-brand">
<i className="fa fa-mobile text-warning">Contact <span className="text-warning">Directory</span></i></Link>
    </div>
</nav>
    </>
  )
}

export default Navbar
