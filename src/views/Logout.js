import {Navigate} from 'react-router-dom'

function Logout(props){
sessionStorage.removeItem('token')
sessionStorage.removeItem('admin')
props.token();
  return(
   <Navigate to="/CostOfLivingAndExpenses" />
  )
 }
 export default Logout;