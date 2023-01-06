
import style from '../css/style.css'
import {Navigate, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Footer(props){

  const [loggedIn, setLoggedIn] = useState('false')
  const [admin, setAdmin] =useState('n')

  useEffect(() =>{
    setLoggedIn(props.loggedIn)
    setAdmin(props.admin)
 }, [props.loggedIn])

  if(props.loggedIn=='true' && admin.toUpperCase()=='N'){
    console.log(props.loggedIn=='true' && admin.toUpperCase()=='N')
    return(
      <div className="container-fluid height">
          {/* <ul>
          <span><Link to="/Contact">Contact</Link></span>
          <br></br>
          <span><Link to="/About">About</Link></span>
          </ul> */}

<div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 address */}
        <div className="col">
          <h2>Cost Of living and Expenses</h2>
          <ui className="list-unstyled">
            <li>LEIXLIP, IRELAND</li>
            <li>123 Streeet South North</li>
          </ui>
        </div>
        {/* Column2 */}
        <div className="col">
          <h4>Tips</h4>
          <ui className="list-unstyled">
            <li>HELP</li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
          </ui>
        </div>
        {/* Column3 links to social media */}
        <div className="col">
          <h4>SOCIAL MEDIA LINKS</h4>
          <ui className="list-unstyled">
            <li><a href="https://www.facebook.com">FACEBOOK</a></li>
            <li><a href="https://www.twitter.com">TWITTER</a></li>
            <li><a href="https://www.instagram.com">INSTAGRAM</a></li>
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} NCI | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
          </div>
          )
  }else if(loggedIn=='true' && admin.toUpperCase()=='Y'){
    console.log(loggedIn=='true' && admin.toUpperCase()=='Y')
 return(
  <div className="admin-footer">
    <p className="p">
      &copy;{new Date().getFullYear()} NCI | All rights reserved |
      Terms Of Service | Privacy
    </p>
  </div>
 )
  }
  else{
    return(
      <div className="footer">
    

<div className="main-footer">
<div className="container">
  <div className="row">
    {/* Column1 address */}
    <div className="col">
      <h2>Cost Of living and Expenses</h2>
      <h3 className="list-unstyled">
         <li>LEIXLIP, IRELAND</li>
        <li>123 Streeet South North</li>
      </h3>
    </div>
    {/* Column2 */}
    <div className="col">
      <h4>Tips</h4>
      <ui className="list-unstyled">
        <li>HELP</li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">CONTACT</Link></li>
      </ui>
    </div>
    {/* Column3 links to social media */}
    <div className="col">
      <h4>SOCIAL MEDIA LINKS</h4>
      <ui className="list-unstyled">
        <li><a href="https://www.facebook.com">FACEBOOK</a></li>
        <li><a href="https://www.twitter.com">TWITTER</a></li>
        <li><a href="https://www.instagram.com">INSTAGRAM</a></li>
      </ui>
    </div>
  </div>
  <hr />
  <div className="row">
    <p className="col-sm">
      &copy;{new Date().getFullYear()} NCI | All rights reserved |
      Terms Of Service | Privacy
    </p>
  </div>
</div>
</div>
      </div>
    )
  }
    
}
export default Footer;