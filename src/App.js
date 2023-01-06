
import './App.css';
import Home from './views/Home'
import Mainpage from './views/Mainpage';
import Register from './views/Register';
import About from './views/About';
import Login from './views/Login';
import Profile from './components/Profile';
import Logout from './views/Logout'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './views/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Users from './views/Users';
import Compare from './views/Compare';
import UserContact from './views/UserContact';
import CurrencyConverter from './views/CurrencyConverter';



function App() {

  const [location] = useState('')
  const [loggedIn, setLoggedIn] =useState('false')
  const [admin, setAdmin] =useState('n')
  const [city, setCity]=useState('')


  const token=function(){
    setCity(sessionStorage.getItem("city"));
  if(sessionStorage.getItem("token")){
    setLoggedIn(sessionStorage.getItem("token")?'true':'false')
    setAdmin(sessionStorage.getItem("admin"))
  }
else{
  setLoggedIn(false)
}
}

return (
    <div>
   <Router>
    <div>
      <Navbar loggedIn={loggedIn} admin={admin}/>
       <Routes>
            <Route path ="/CostOfLivingAndExpenses" element ={<Home token={token} location={city}/>} />
            <Route path ="/Mainpage" element={<Mainpage token={token}/>} />
            <Route path ="/Profile" element={<Profile token={token} />} />
            <Route path ="/Register" element={<Register />} />
            <Route path ="/Login" element={<Login token={token}/>} />
            <Route path ="/Logout" element={<Logout token={token}/>} />
            <Route path ="/About" element={<About />} />
            <Route path ="/Contact" element={<Contact />} />
            <Route path ="/CurrencyConverter" element={<CurrencyConverter />} />
            <Route path ="/Compare" element={<Compare token={token} />} />
            <Route path ="/Dashboard" element={<Dashboard token={token} location={location}/>} />
            <Route path ="/Users" element={<Users token={token}/>} />
            <Route path ="/UserConatct" element={<UserContact token={token} />}/>
            

           </Routes>
       <Footer loggedIn={loggedIn} admin={admin} />
     </div>
   </Router>
    </div>
  );
}

export default App;
