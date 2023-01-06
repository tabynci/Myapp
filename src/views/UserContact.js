
import React, { useEffect, useState } from "react";
import axios from 'axios'
import SideBar from '../components/Sidebar';
import Table from 'react-bootstrap/Table';
import APi from './File';
import { Helmet } from "react-helmet-async";
// Taken button https://vegibit.com/how-to-delete-an-item-from-an-array-in-react/#:~:text=React%20Key%20Concept&text=The%20delete%20button%20exists%20on,done%20in%20that%20component%20itself.
function UserContact(props){


const [err]=useState('not connected');

const [result, setResult]=useState([])
const [delStatus, setDelStatus]=useState('')

// const [id, setId]=useState('')
props.token();

const getAllUsers = async function(){
    
    try {
        console.log('check')
        var data = await axios.get(APi.host+"/Users/allcontact")
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
        // console.log("${CostOfLivingAndExpenses}/Users/allcontact/"+e.target.id)
        var data =await axios.delete(APi.host+"/Users/allcontact/"+e.target.id)
        // console.log(data)
        if(data.status == '200')
            setDelStatus('true');
    
    }catch(error){
        console.log(err)
}

}


useEffect(()=>{
    getAllUsers();
},[delStatus]);

// console.log(getAllUsers());

    return(
       
        <div>
            <Helmet><title>Conact Users</title></Helmet>
        <SideBar />
        <div id="App" className='adminDiv'>
            <h1 className="conatct-h">Contact Users</h1>
        <Table striped bordered hover>
                    <thead>
                        <tr className="user-color">
                            <th className="user-contact">User Id</th>
                            <th className="user-contact">UserName</th>
                            <th className="user-contact">Email</th>
                            <th className="user-contact">Message</th>
                           <th className="user-contact">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        result.map((user)=>{
                       
                        return (<tr className="contact-user"><td >{user.id}</td>
                                 <td>{user.username}</td>
                                <td>{user.email}</td>
                            <td>{user.message}</td>
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
   
    

export default UserContact;