import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
    const [cli, SetCli] = useState(false);
    const handleCli=()=> SetCli(!cli);
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link> 
      <ul className="nav">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/Project">Project</Link>
        </li>
        <li>
           <Link to="/About">About</Link>
        </li>
        <li>
           <Link to="/Contact">Contact</Link>
        </li>
      </ul>  
       <div className="hamburger" onClick={handleCli}>
        {cli ? (<FaTimes size={20} style={{color: "#fff"}} />):
        
        (<FaBars size={20} style={{color: "#fff"}} />)}
       </div>
    </div>
  )
}

export default Navbar