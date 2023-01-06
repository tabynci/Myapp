import React, { useEffect, useState } from "react";
import axios from 'axios'
import SideBar from '../components/Sidebar';
import Table from 'react-bootstrap/Table';
import APi from './File';


// Taken button https://vegibit.com/how-to-delete-an-item-from-an-array-in-react/#:~:text=React%20Key%20Concept&text=The%20delete%20button%20exists%20on,done%20in%20that%20component%20itself.
function Users(props){


const [err, setErr]=useState('not connected');

const [result, setResult]=useState([])
// const [users, setUsers]=useState([])
const [delStatus, setDelStatus]=useState('')

// const [id, setId]=useState('')
props.token();

const getAllUsers = async function(){
    
    try {
        // console.log('check')
        var data = await axios.get(APi.host+"/users")
        // console.log(data);
        setResult(data.data)
        setDelStatus('');
        // console.log(data.data.result);
        }catch(err){
        console.error(err);
    }
}


async function deletUser (e){
    e.preventDefault();
    try{
        // console.log("http://localhost:3005/users/"+e.target.id)
        var data =await axios.delete(APi.host+"/users/"+e.target.id)
        if(data.status == '200')
            setDelStatus('true');
    }catch(error){
        console.log(err)
}

}



const viewUser=result.map(user=>{
    
    return <div className="user-div">
        <h2>ID:{user.id}</h2>
        <h4>Username:{user.username}</h4>
        <h4>Email:{user.email}</h4>
        <h4>Age:{user.age}</h4>
        <br/>
        <ul>
        </ul>
     
         </div>
});

useEffect(()=>{
    getAllUsers();
   
    // viewUser();
},[delStatus]);

// console.log(getAllUsers());

    return(
       
        <div>
           
        <SideBar />
        <div id="App" className='adminDiv'>
         
            <h1 className="user-h">Users</h1>
        
        <Table striped bordered hover>
                    <thead>
                        <tr  className="user-color">
                            <th className="user-contact">User Id</th>
                            <th className="user-contact">UserName</th>
                            <th className="user-contact">Email</th>
                            <th className="user-contact">Age</th>
                            <th className="user-contact">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        result.map((user)=>{
                       
                        return (<tr className="contact-user"><td >{user.id}</td>
                                 <td>{user.username}</td>
                                <td>{user.email}</td>
                            <td>{user.age}</td>
                           <td> <button onClick={deletUser} id={user.id} className="btn btn-lg btn-outline-danger ml-4">Delete</button></td>
                        </tr>);
                        })
                    }
                    </tbody>
                   
                </Table>
                </div>
       
        </div>
    )
}
   
    

export default Users;