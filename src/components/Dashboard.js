import React from 'react';
import '../css/style.css';
import Users from '../views/Users';
import { Helmet } from 'react-helmet-async';
function Dashboard(props){
  console.log(props)
  props.token();
    return(
      <div>
        <Helmet><title>Dashboard</title></Helmet>
     
        <Users token={props.token}/>
      </div>
      
    );
}
export default Dashboard;
