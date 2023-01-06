
import {useState} from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';
import APi from './File';
import { set } from 'lodash';
import { Helmet } from 'react-helmet-async';

function Register(props){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [errorUsername, setErrorUsername]=useState('')
    const [errorEmail, setErrorEmail]=useState('')
    const [errorPassword, setErrorPassword]=useState('')
    const [errorAge, setErrorAge]=useState('')
    const [error, setError]=useState('')
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
   

    function handleUsernameInput(e){
        e.preventDefault()
        setError('')
        setMessage('')
        setUsernameError('')
        setErrorUsername('')
        setEmailErr('')
        setErrorEmail('')
        setAgeError('')
        setErrorAge('')
        setErrorPassword('')
        setPwdError('')
        setUsername(e.target.value)
    }
    function handleEmailInput(e){
      
        e.preventDefault()
        setError('')
        setMessage('')
        setUsernameError('')
        setErrorUsername('')
        setEmailErr('')
        setErrorEmail('')
        setAgeError('')
        setErrorAge('')
        setErrorPassword('')
        setPwdError('')
        setEmail(e.target.value)

    }
    function handleAgeInput(e){
        e.preventDefault()
        setError('')
        setMessage('')
        setUsernameError('')
        setErrorUsername('')
        setEmailErr('')
        setErrorEmail('')
        setAgeError('')
        setErrorAge('')
        setErrorPassword('')
        setPwdError('')
        setAge(e.target.value)
    }
    function handlePasswordInput(e){
        e.preventDefault()
        setError('')
        setMessage('')
        setUsernameError('')
        setErrorUsername('')
        setEmailErr('')
        setErrorEmail('')
        setAgeError('')
        setErrorAge('')
        setErrorPassword('')
        setPwdError('')
        setPassword(e.target.value)
    }
   const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const ValidUsername =new RegExp('[a-zA-Z][*0-9]');

   async function handleSubmit(e){
        e.preventDefault()
console.log(age)
        if(username!=="" && email!=="" && age!==""){
         
            setError('');
            setMessage('')
          
          

            if (!(validEmail.test(email))) {
                console.log(!(validEmail.test(email)))
                setEmailErr(true);
             }else if(!(ValidUsername.test(username))){
                
                setUsernameError(true);
             }else if (!(validPassword.test(password))) {
                setPwdError(true);
             }else if (age<18) {
                setAgeError('user should be 18 years');
              } else{
                try{
                    // console.log("value" + APi.host);
                     await axios.post(APi.host + "/Users/register", {
                    username: username,
                    email:email,
                    age:age,
                    password: password
                 
                }).then((response)=>{
                    console.log(response)
                    setUsername('')
                    setPassword('')
                    setAge('')
                    setEmail('')
                    setUsernameError('')
                    setErrorUsername('')
                    setEmailErr('')
                    setErrorEmail('')
                    setAgeError('')
                    setErrorAge('')
                    setErrorPassword('')
                    setPwdError('')
                    setMessage("Successfully Registered")

                 })
                 }catch(e) {
                    if(e.response.status === 400){
                        setMessage(e.response.data.message)
                    } else {
                        setMessage("An error occured please try again later")
                    }
                }
             }
            
        }else if(username==="" && password!=="" && email!=="" && age !=="" ){
            setErrorUsername("Please enter username")
        } else if(username!=="" && password==="" && email!==""  && age !==""){
            setErrorPassword("Please enter password")
        }else if(username!=="" && password!=="" && email===""  && age !==""){
            setErrorEmail("Please enter email")
        } else if(username!=="" && password!=="" && email!==""  && age ===""){
            setErrorAge("Please enter age")
        } else{
            setError("please fill all the fields")
        }
       
    }
             return(
                <div className='registerDiv'>
                    <Helmet><title>Register</title></Helmet>
             <div className='register'>
                 
                  <header>
                    <form>
                        <h1 className='register-header'>Register Form</h1>
                    <br/>
                    <div>
                    <label> Username<br></br></label> <span style={{ color: 'red' }}>*</span> <br></br>
                 <input value= {username}  onChange={handleUsernameInput} placeholder='Enter Username' required/>
                 <br/>
                    </div>
                 <div>
                 <label> Email<br></br> </label><span style={{ color: 'red' }}>*</span> <br></br>
                 <input type='email' value={email}  onChange={handleEmailInput} placeholder='Enter Email' required />
                 <br/>
                 </div>
                <div>
                <label> Age<br></br></label> <br></br>
                 <input type='text' value={age}  onChange={handleAgeInput} placeholder='Enter Age' required/>
                 <br/>
                </div>
                 <div>
                 <label> Password<br></br> </label><span style={{ color: 'red' }}>*</span> <br></br>
                 <input type='password' value={password} onChange={handlePasswordInput} placeholder='Enter Password' required/>
                 <br/><br/>
                 </div>
                 <div>
                 <button id="reg-button" onClick={handleSubmit} >Register</button><br/><br/>
                </div>
                 </form>
                 </header>
                <div className='registers'>
                <h4 style={{color:'green'}}> {message} </h4>
                <h4 style={{color:'red'}}> {errorUsername} </h4>
                <h4 style={{color:'red'}}> {errorPassword} </h4>
                <h4 style={{color:'red'}}> {errorEmail} </h4>
                <h4 style={{color:'red'}}> {errorAge} </h4>
                <h4 style={{color:'red'}}> {error} </h4>
                
                {emailErr && <p style={{color:'red'}} >Your email is invalid</p>}
                {pwdError && <p style={{color:'red'}}>password starts with alphabets, number or special character like *</p>}
                {usernameError && <h4 style={{ color: 'red' }}>Your username is aplhanumeric and should always starts with alphabets and numbers</h4>}
                {ageError && <p style={{color:'red'}}>You should be minimum of 18 years old</p>}
                    <h3>
                        Already Customer <span></span> <Link to="/login">Sign In</Link> 
                    </h3>
                </div>
                </div>
                 </div>
            ) 
        
       
    }
   
 
 export default Register;