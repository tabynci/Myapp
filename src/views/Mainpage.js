import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import _ from 'lodash'
import {Navigate} from 'react-router-dom'
// import Cities from './Cities';
import React from 'react';
import m from '../images/m.jpg';
import u from '../images/u.jpg';
import Pagination from './Pagination';
import PricesPost from './PricesPost';
import { Helmet } from 'react-helmet-async';

           
function Mainpage(props){

   
      const [city_name, setCityName] = useState('')
      const [country_name, setCountry] = useState('')
      const [prices, setPrices]=useState([])
       const [setCategoryGroup]=useState({})
      const [error, setError]=useState('');
        const [loading, setLoading]=useState(false)
        const [currentPage, setCurrentPage]=useState(1);
        const [pricesPerPage]=useState(2);
        const [Status, setStatus]=useState('')
       const [Dublin, setDublin] =useState([]);
        const [citynameError, setCitynameError]=useState('')
        const [countrynameError, setCountrynameError]=useState('')
        const dataFetchedRef = useRef(false);

      function handleSearchCity(e){ //when user enters value this function is called out
          e.preventDefault()
          console.log(Status);
          setError('');
          setCityName(e.target.value)
          
      }
      function handleSearchCountry(e){ //when user enters value this function is called out
        e.preventDefault()
        console.log(Status);
        setError('');
        setCountry(e.target.value)
       
       }
      
       const getCitiesPrices= async function() {
       
        if(Status==='true' && city_name && country_name){
         try{
             var data= await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
             headers :{
                 'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
             },
             params:{city_name:city_name, country_name:country_name}
         })
        if(data.status===200){
       
         setLoading(true);
         setPrices(data.data.prices)
         console.log("check city")
         // console.log(data.data.prices)
    
         setLoading(false);
        }else{
         console.log(data)
        }
          }catch(error){
             console.log(error)
         }
        }
     }


        function handleSearch(e){
        e.preventDefault();

        console.log(Status+city_name + country_name);
            if(city_name!=="" && country_name!=="")
            {
                setStatus('true')
        console.log(Status);
        setError('');
       
        getCitiesPrices();
        }else if(city_name==="" && country_name!==""){
        
            setError("please enter city name")
        } else if(city_name!=="" && country_name===""){
         
            setError("please enter country name")
        }  else if(city_name==="" && country_name===""){
            setError("please enter all fields")
         }     
               
     };
    
 useEffect(()=>{
    getCitiesPrices();
    },[Status]);
   
// get currenet price
    const indexOfLastPrice =currentPage*pricesPerPage;
    const indexOfFirstPrice=indexOfLastPrice-pricesPerPage;
    const currentPrice=prices.slice(indexOfFirstPrice, indexOfLastPrice);

// Change Page
    const paginate =(pageNumber)=> setCurrentPage(pageNumber);

///props.token
    if(sessionStorage.getItem("token")){
      if(Status===""){
    
        return(
            
            <div className='main'>
                <Helmet><title>Main Page</title></Helmet>
           
                <p className='Mainpage-input-1'> Cost of Living and Expenses is an international database.</p>
                <p className='Mainpage-input-2'>Information on seconds on :buying an apartment, Mortgage Costs, Transportaion, Salaries and Financing, Restaurants, Childcare.</p>
                
            <div className='image-main'>
               <img alt="Mapimage"  src={m}  width="500px"></img>
                </div>
                <div className='mainpage'>
                    <div className='Image-opacity'>
                        <img alt="noimage" src={u} style={{ width:"90em"}}></img>
                    </div>
                    
                    <div className='move-text'>
                    <label className='Mainpage-input-red'> City Name</label><br/>
                 
                    <input type="text" className='Mainpage-input' value={city_name} onChange={handleSearchCity} placeholder="Enter City name"></input><br/>
                    <label className='Mainpage-input-red'>Country Name</label><br/>
                    
                    <input type="text"  className='Mainpage-input' value={country_name} onChange={handleSearchCountry} placeholder=" Enter Country Name"></input><br/><br/>
                    <button className='mainpage-input-button' name='search' onClick={handleSearch}>Search</button><br></br>
                    </div>
                    <div className='move-text-error'>
                    <h4 className="font-padding" style={{color:'red'}}> {error} </h4>
                    </div>
                   
                </div>


              </div>
               )}else if(Status==='true'){
                return(
                    <div className='main'>
                        <div className='image-main-1'> 
                        <p className='Mainpage-input-1'> Cost of Living and Expenses is an international database.</p>
                    <p className='Mainpage-input-2'>Information on seconds on :buying an apartment, Mortgage Costs, Transportaion, Salaries and Financing, Restaurants, Childcare.</p>
                    
                            <div className='cat-div-1'>
                                    <div className='div-1'>
                                    <p className="text-1"> City Name</p>
                                    <input type="text" className="dropdown" value={city_name} onChange={handleSearchCity} placeholder="Enter City name"></input><br/>
                                    </div>
                                    <div className='div-2'>
                                    <p className="text-2">Country Name</p>
                                    <input type="text" className="dropdown" value={country_name} onChange={handleSearchCountry} placeholder=" Enter Country Name"></input><br/><br/>
                                    </div>
                                    <div className='div-button'>
                                    <button name='search' id="search-1" onClick={handleSearch}>Search</button><br></br>
                                    </div>
                            </div>
                        
                        </div>
                  
                <div className='category'>                
                <PricesPost prices ={currentPrice} loading={loading}/>
                <Pagination pricesPerPage={pricesPerPage} totalPosts={prices.length} paginate={paginate}/>
                <br></br>
                </div> 
                
                <div className="note main-note">
                <h4 >Note</h4>
                <p style={{color:'red'}} className="item-n" >* <span className="item-name">If your not getting data try after one hour.</span></p> 
            </div>

                    </div>
                )
                
               }
      }else{
                <Navigate to="/CostOfLivingAndExpenses" />
               }
        }
      
  export default Mainpage;