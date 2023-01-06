
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { update } from "lodash";
import ProfileImg from '../images/ProfileImg.png'
import APi from '../views/File';
import { Helmet } from 'react-helmet-async';

function Profile(props){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] =useState('')
    const [password, setPassword] =useState('')
    const [msg, setMsg] =useState('')
    const [ConfirmPassword, setConfirmPassword]=useState('')

    function handleUsernameInput(e){
        e.preventDefault()
        setUsername(e.target.value)
     }
    function handleEmailInput(e){
        e.preventDefault()
        setEmail(e.target.value)
        }
        function handleAgeInput(e){
            e.preventDefault()
            setAge(e.target.value)
            }

        function handlePasswordInput(e){
                e.preventDefault()
                setPassword(e.target.value)
                }
        function handleConfirmPasswordInput(e){
                    e.preventDefault()
                    setConfirmPassword(e.target.value)
                    }
const viewProfile = async function(){
    
    try {
        console.log(sessionStorage.getItem("id"))
        setId(sessionStorage.getItem("id"))
      
        var data = await axios.post(APi.host+"/users/profile", {token: sessionStorage.getItem("token")})
        // console.log(data);
        return{
            result:data.data.result[0]
        }
        console.log(data.data.result[0]);
        }catch(err){
        console.error(err);
    }
}

function ProfileUser(){
    props.token()
     viewProfile().then((value)=>{
    console.log(value.result.username)
    setUsername(value.result.username)
    setEmail(value.result.email)
    setAge(value.result.age)
    setPassword(value.result.password)
});
}

useEffect(()=>{
    ProfileUser();
},[])



const UpdateProfile = async function() {
    try {
       console.log( {username:username,email:email,age:age, password:password})
        var data = await axios.put(APi.host+"/users/update",
        {token: sessionStorage.getItem("token"), user:{username:username,email:email,age:age, password:password}})
    if(data.status===200){
    setMsg('User details updated succsesfully')
    }
    else{
        setMsg('Error occured please try later')
    }
        }
    catch(error){
        console.log(error)
    }
}

 function handleUpdate(e){
    e.preventDefault()
    UpdateProfile();
    }
  

if(sessionStorage.getItem("token")){
return (

    <div className="ProfileDiv">
       <Helmet><title>Profile</title></Helmet>
    <div className="Profile">
        <p className="user-profile">User profile</p>
        <div className="profile-logo">
            
               <img src={ProfileImg} alt="profileImage" width="8%" />
        </div>

         <div className="DasbordUser">
         <form>
        <fieldset>
            <label className="input-padding">UserName</label><br></br>
            <input type="text" className="input-padding" value={username} onChange={handleUsernameInput} ></input><br></br>
            <label>email</label><br></br>
            <input type="email" value={email} onChange={handleEmailInput} ></input><br></br>
            <label>Age</label><br></br>
            <input type="text" value={age} onChange={handleAgeInput}></input><br></br>
            <label>Password</label><br></br>
            <input type='password'  value={password} onChange={handlePasswordInput} placeholder='Enter Password' required></input><br></br>
            
             <label>Confirm Password</label><br></br>
            <input type='password'  value={ConfirmPassword} onChange={handleConfirmPasswordInput} placeholder='Enter Confirm Password' required></input><br></br>
            <br></br>
            <h4 style={{color:'green'}}> {msg} </h4>
            <button className="profile-button" onClick={handleUpdate}>Update</button>
            </fieldset>
            </form>
            </div>
            
        </div>
        <span>&#36;</span>
        

    </div>
    
   )
}
}
  
   
export default Profile;