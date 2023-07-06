import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Iconbar from '../assets/icons/INMOBICAPITALBLANCO.png'
//import './Navbar.css'
import Icontoogle from "../assets/icons/menu-bar.png"
import "../App.css"
const NavBarP=()=>{


    return(

<nav className="navbar navbar-expand-lg ">
  <Link to="/">
    <img src={Iconbar} className="nbicon"/>

  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <img src={Icontoogle} className="navbar-toggler-icon menunavbar" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <Link to="/simulador"> 
      <li className="nav-item navibtn">
        <p className="nav-link  text-white " >SIMULADOR </p>
      </li>
      </Link>


      <Link to="/nuestraspropiedades">
      <li className="nav-item navibtn">
        <p className="nav-link  text-white">NUESTRAS PROPIEDADES </p>
      </li>
      </Link>
    


      <Link to="/vendemostuinmueble">
      <li className="nav-item navibtn">
        <p className="nav-link  text-white" >COMPRAMOS TU PROPIEDAD </p>
      </li>
      </Link>
 
    

    </ul>
  </div>
</nav>


    )

}

export default NavBarP

