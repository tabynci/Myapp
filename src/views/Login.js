import {useState} from 'react'
import axios from 'axios';
import {Navigate, Link} from 'react-router-dom'
import APi from './File';
import { Helmet } from 'react-helmet-async';


function Login(props){
    
   const [message] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
    const [errorUsername, setErrorUsername]=useState('');
    const [errorPassword, setErrorPassword]=useState('');
    const [error, setError]=useState('');
    const [loggedIn,setLoggedIn] =useState('false')
    const [admin,setAdmin] =useState('n')
    const [pwdError, setPwdError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
   
   function handleUsernameInput(e){
      e.preventDefault()
      setError('');
      setUsername(e.target.value)
      }
      
    function handlePasswordInput(e){
      e.preventDefault()
      setError('');
      setPassword(e.target.value)
  }

  const ValidUsername =new RegExp('[a-zA-Z][*0-9]');

  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

   

 async function handleSubmit(e){
  e.preventDefault()
setError('')
setErrorUsername('')
setErrorPassword('')
setUsernameError('')
setPwdError('')
  if(username!==""  && password!=="" ){
   
  if(!(ValidUsername.test(username))){
   
      setUsernameError(true);
   }else if (!(validPassword.test(password))) {
      setPwdError(true);
   }else{
    try{

      var data = await axios.post(APi.host +"/Users/login",{username:username, password:password })
      if(data) {
      
        //  console.log(data);
        
          sessionStorage.setItem("token",data.data.Usertoken)
          sessionStorage.setItem("admin",data.data.admin)
          setLoggedIn((data.data.Usertoken?'true':'false'))
          setAdmin(data.data.admin)
          setErrorUsername("")
          setErrorPassword("")
          props.token()
      }
     
      } 
      catch(error) {
        console.log(error)
      }
   }
   
 
  }else if(username==="" && password!==""){
      
      setErrorUsername("Please enter username")
      }else if(username!=="" && password===""){
      
        setErrorPassword("Please enter Password")
          }
      else{
          setError("Please enter all fields")
        }
            
      }
 
  // to check only for user login
  if(loggedIn === 'true' && admin.toUpperCase() === 'N'  ){
    // console.log(loggedIn +'09')
      return(
          <Navigate to="/Mainpage" />
      )
  } 
  // to check only for admin login
  else if(loggedIn==='true' && admin==='y'){
      // console.log(loggedIn +'98')
      return(
          <Navigate to="/Dashboard" />
      )
    }
         
    return(
          <div className='loginDiv'>
             <Helmet><title>Login</title></Helmet>
            <div className='login'>
             
             <header>
              <form>
                <fieldset>
                <h1 className='log-padding'>Login Form</h1>
              <br/>
             <label required-field>UserName</label><span style={{ color: 'red' }}>*</span> <br/>
             <input type="text" value={username} onChange={handleUsernameInput} placeholder='Enter Username' required /> <br></br>
             <h4 style={{color:'red'}}> {errorUsername} </h4>  {usernameError && <h4 style={{ color: 'red' }}>Your username is aplhanumeric and should always starts with alphabets and numbers</h4>}
             <label required-field>Password</label><span style={{ color: 'red' }}>*</span><br/>
             
             <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
             <br/> <br /> <h4 style={{color:'red'}}> {errorPassword} </h4> {pwdError && <h4 style={{ color: 'red' }}>password starts with alphabets, number or special character like *</h4>}
             <button  id="login-button" onClick={handleSubmit}>Login</button>
             <br/> 
             <h4 style={{color:'red'}}> {message} </h4>
             <h4 style={{color:'red'}}> {error} </h4>
             
             <br/>
             <div>
              <h4>Not a Customer 
               <span></span>   <Link to="/Register">Register</Link></h4>
             </div>
             </fieldset>
              </form>
             </header>
            </div>
          </div>
            
        )
    

  }
 
 export default Login;