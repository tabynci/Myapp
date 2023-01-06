// https://www.pngkey.com/download/u2w7u2o0o0e6e6i1_contact-me-contact-button-for-website/  image for contact us
import {useState} from 'react'
import contact from '../images/contact.jpeg'
import axios from 'axios';
import APi from './File';
function Contact(){
    
    const [msg, setMsg] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorEmail, setErrorEmail]=useState('')
    const [errorUsername, setErrorUsername]=useState('');
    const [errorMessage, setErrorMessage]=useState('')
    const [usernameError, setUsernameError] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    
    const [error, setError] =useState('')
   function handleUsernameInput(e){
   
      e.preventDefault()
      setError('')
      setErrorEmail('')
      setUsernameError('')
      setEmailErr('')
      setErrorMessage('')
      setUsername(e.target.value)
  }
  function handleEmailInput(e){
      e.preventDefault()
      setError('')
      setErrorEmail('')
      setUsernameError('')
      setEmailErr('')
      setErrorMessage('')
      setEmail(e.target.value)
  }
  function handleMessageInput(e){
    setError('')
     setErrorEmail('')
    setUsernameError('')
    setEmailErr('')
    setErrorMessage('')
    e.preventDefault()
    setMessage(e.target.value)
}
// used to validate username
const ValidUsername =new RegExp('[a-zA-Z][*0-9]');

// used to validate email
const validEmail = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
// once the user clicks submit button this function called out
 async function handleSubmit(e){
      e.preventDefault()
      // all the fileds should be filled out
     if(username !== "" && email !== "" && message !== ""){
      if(!(ValidUsername.test(username))){
        console.log(!(ValidUsername.test(username)))
    
          setUsernameError(true);
       }else if(!(validEmail.test(email))) {
        setEmailErr(true);
     }else{
        try{
              
         await axios.post(APi.host + "/Users/contact", {
          username: username,
          email:email,
          message: message
            
            }).then((response)=>{
                console.log(response)
                setMsg("we will conatct you soon")
                setError('')
                setErrorEmail('')
                setUsernameError('')
                setEmailErr('')
                setErrorMessage('')
                setUsername("")
                setEmail("")
                setMessage("")
                setMsg("contact saved succesfully")
            })
            
            } catch(e) {
                if(e.response.status === 400){
                    setMsg(e.response.data.message)
                } else {
                    setMsg("An error occured please try again later")
                }
              }

            }
        
      }else if(username==="" && email!=="" && message!==""){
      
        setErrorUsername("Please enter username")

        }else if(username!=="" && email==="" && message!==""){
      
          setErrorEmail("Please enter email")
          
          }else if(username!=="" && email!=="" && message===""){
        
          setErrorMessage("Please enter message")
            }
        else{
            setError("Please enter all fields")
          }
              
        }
      return(
        <div className='conatct-main-div'>
        <div className='contact-div'>
           
           <img src={contact} width="23%" />
           
          <header>
           <form>
           <h4 style={{color:'red'}}> {error} </h4>
          <br/>
          <label>UserName</label> <br/>
          <input type="text" value={username} onChange={handleUsernameInput} />
          <br/><h4 style={{color:'red'}}> {errorUsername} </h4> <h4 style={{color:'red'}}>{usernameError && <p>Your username is invlaid</p>}</h4>  
          <label>Email</label> <br/>
          <input type='email' value={email} onChange={handleEmailInput} />
          <br/> <h4 style={{color:'red'}}> {errorMessage} </h4><h4 style={{color:'red'}}>  {emailErr && <p>Your email is invalid</p>} </h4>
        <label>Message</label> <br/>
          <textarea rows = "5" cols = "50" value={message} name = "description" onChange={handleMessageInput}>
        </textarea> <br/>
          <button onClick={handleSubmit}>Submit</button>
          <h4 style={{color:'red'}}> {msg} </h4>
           <h4 style={{color:'red'}}> {errorEmail} </h4>
           <br/> <br />
           </form>
          </header>
          
         </div>
         
        </div>
          
          
      )
  
 }
 export default Contact;