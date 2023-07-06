import React, { useState } from "react"
import { Link } from 'react-router-dom';
import Iconbar from '../assets/icons/INMOBICAPITALBLANCO.png'
//import './Navbar.css'
import Icontoogle from "../assets/icons/menu-bar.png"
import "../App.css";
const NavBar=()=>{


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
        <p className="nav-link  text-white " >SIMULADOR</p>
      </li>
      </Link>

      <Link to="/nosotros"> 
      <li className="nav-item navibtn">
      
        <p className="nav-link  text-white" >NOSOTROS</p>
 
      </li>
      </Link>


      <Link to="/contacto">
      <li className="nav-item navibtn">
        <p className="nav-link  text-white" >CONTACTO </p>
      </li>
      </Link>
      <Link to="/unete">
      <li className="nav-item navibtn">
        <p className="nav-link  text-white" >UNETE A NOSOTROS </p>
      </li>
      </Link>
      <Link to="/unete">
      <li className="nav-item navibtn">
        <p className="nav-link  text-white" >PROPIEDADES </p>
      </li>
      </Link>

    

    </ul>
  </div>
</nav>



    )

}

export default NavBar

