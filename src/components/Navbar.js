import React from "react";
import logo from '../images/logo.jpg'
import Search from "../views/Search";
import {useState, useEffect} from 'react'


import { Link} from 'react-router-dom'
function Navbar(props) {
// console.log(props)
const [loggedIn, setLoggedIn] =useState('false')
const [admin, setAdmin] =useState('n')

  useEffect(() =>{
    setLoggedIn(props.loggedIn)
    setAdmin(props.admin)
 }, [props.loggedIn])
 
   if(sessionStorage.getItem("token") && admin.toUpperCase()==='N'){
   
    return (
        <div className="container-fluid height">
        <nav className="navbar navbar-expand-lg bg height">
        <div className="container-fluid div-width shawdow">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" height="60px" width="120px" ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse div-padding" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/CostOfLivingAndExpenses">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/Mainpage">MainPage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active  text-light item-font" aria-current="page" to="/Compare">Compare</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/CurrencyConverter">CurrencyConverter</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link dasboard-padding active text-light item-font" aria-current="page" to="/Profile">Profile</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link dasboard-padding active text-light item-font" aria-current="page" to="/DataPage">DataPage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/Logout">Logout</Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
          </div>
        );
} else if(sessionStorage.getItem("admin") && admin.toUpperCase()==='Y'){
  
   
    return(
      <div className="container-fluid fluid-padding height">
      <nav className="navbar navbar-expand-lg bg height">
      <div className="container-fluid div-width shawdow">
        <a className="navbar-brand logoIMG" href="#"><img src={logo} alt="logo" height="60px" width="120px" ></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse div-padding" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light item-font" aria-current="page" to="/CostOfLivingAndExpenses">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light item-font" aria-current="page" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-light item-font" aria-current="page" to="/Logout">Logout</Link>
            </li>
            </ul>
         </div>
      </div>
    </nav>
        </div>)
  }
  else {
    return (
          <div className="container-fluid fluid-padding height">
        <nav className="navbar navbar-expand-lg bg height">
        <div className="container-fluid div-width shawdow">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" height="60px" width="120px"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/CostOfLivingAndExpenses">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light item-font" aria-current="page" to="/Login">Login</Link>
              </li>
              </ul>
              <Search />
          </div>
        </div>
      </nav>
          </div>
        );
  }

  }

  export default Navbar;