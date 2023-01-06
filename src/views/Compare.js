// https://react-bootstrap.github.io/components/dropdowns/
// https://react-bootstrap.github.io/components/table/
// https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

import React, { useState} from "react";
import axios from 'axios';
import { useEffect } from "react";
import ComparePost from "./ComparePost";
import PaginationCompare from "./PaginationCompare";
import APi from './File';
import { Helmet } from 'react-helmet-async';

function Compare(props){
    const [host, setHost] = useState('')
    const [foreign, setforeign] = useState('')
    const [city1Prices, setCity1Prices]=useState([])
    const [city2Prices, setCity2Prices]=useState([])
    const [categories, setCategories]=useState([])
    const [city1Array, setCity1Array] =useState([])
    const [city2Array, setCity2Array] =useState([])
    const [loading]=useState(false)
    const [currentPage, setCurrentPage]=useState(1);
    const [categoriesPerPage]=useState(4);
    const [Status, setStatus]=useState('')

    //https://softwareengineering.stackexchange.com/questions/433640/in-javascript-how-is-awaiting-the-result-of-an-async-different-than-sync-calls

    const getHost = function(cityname) {
        setHost(cityname)
        getPrices(cityname,'Ireland').then((value) => {
            // console.log(value.data)
            setCity1Prices(value.data.prices)
        });
    }

    const getforeign = function(cityname){
        setforeign(cityname)
        getPrices(cityname,'India').then((value) => {
            // console.log(value.data)
            setCity2Prices(value.data.prices)
        });
    }

    function handlechange1(e){
        e.preventDefault();
        getHost(e.target.value);
    }
    
    function handlechange2(e){
        e.preventDefault();
        getforeign(e.target.value)
    }

     //used for dropdown 1
    const Citydropdown= async function city1Section(){
        try{
            var data = await axios.get( APi.host+"/CompareCities")
            // console.log(data)
            setCity1Array(data.data.map((x)=>
                {
                    return {
                    label:x.city_name, value:x.city_name
                    }
                }
            ))
              
            }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        // console.log("Citydropdown")
        AnotherCitydropdown();
        Citydropdown();
        // console.log(city1)
    },[])

 //used for dropdown 2
    const AnotherCitydropdown =async function city2Sction(){
        try{
            var data= await axios.get(APi.host+"/CompareAnotherCity")
            // console.log(data)
            setCity2Array(data.data.map(y=>{
                return {
                    label:y.city_name, value:y.city_name
                }
            }))
        }catch(error){
            console.log(error)
        }
    }

    const getPrices =  async function(city_name,country_name){
        try{
            if(city_name && country_name){
                const response=await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices",{
                headers:{
                    'X-RapidAPI-Key': 'f183a42a81mshceb2974bf064e57p1137d8jsna883237c0e88'
                },
                params:{city_name:city_name, country_name:country_name}
                })
                return {
                    data:response.data
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    const getCategories = function(){
    setCategories(
        city1Prices.map((price) => {
            if(price.category_name!=="Salaries And Financing"){
                return {
                    "category_name":price.category_name,
                    "item_name":price.item_name
                }}
            })
        )
        setStatus('');
    }
    function handleCompare(e){
        e.preventDefault();
        setStatus('true');
       
        // console.log(city1Prices);
        // console.log(city2Prices);
        
    }
    const handleSave= async function(){
        try{
            console.log(host, foreign)
            if(host !== "" && foreign !== ""){
                await axios.post(APi.host+"/Compare/CompareSave",{
                    token:sessionStorage.getItem("token"),
                    hostcity:host,
                    foreigncity:foreign
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleLoad= async function(){
        try{
            {
                // console.log(sessionStorage.getItem("token"))
                await axios.post(APi.host+"/Compare/compareUser",{
                    token:sessionStorage.getItem("token")
                }).then(response => {
                    // console.log('reponse' + response.data)
                if(response.data[0]) {
                    getHost(response.data[0].hostcity);
                    getforeign(response.data[0].foreigncity);
                    setStatus('true');
                }})
            } 
        }catch(error){
            console.log(error)
        }
    }
        useEffect(()=>{
            getCategories();
        },[Status])

// get currenet price
const indexOfLastPrice =currentPage*categoriesPerPage;
const indexOfFirstPrice=indexOfLastPrice-categoriesPerPage;
const currentCategory=categories.slice(indexOfFirstPrice, indexOfLastPrice);

// Change Page
const paginate =(pageNumber)=> setCurrentPage(pageNumber);

   if(sessionStorage.getItem("token")){
    return(
        <div className="compare-div">
              <Helmet><title>Compare</title></Helmet>
            <div>
                <p className="compareHeading">Compare Data of two cities</p>
            </div>
    
            <div className="compare">
            <div><p className="text">Host: </p></div>
                    <div>
                    <select className="dropdown" onChange={handlechange1}>
                   <option value="⬇️ Select a city 1 ⬇️"> -- Select a city 1-- </option>
                 {city1Array.map((city1)=><option value={city1.value}>{city1.label}</option>)}
                    </select>
                    </div>
                    <div><p className="text-left">Foreign: </p></div>
                    <div>
                    <select className="dropdown" onChange={handlechange2}>
              
                <option value="⬇️ Select a city 2 ⬇️"> -- Select a city 2 -- </option>
                {city2Array.map((city2)=><option value={city2.value}>{city2.label}</option>)}
                    </select>
                    </div>
                   
                <div className="buttonCompare">
                    <button type="button" id="Compare" onClick={handleCompare} class="btn btn-success pull-left">Compare</button>
                    <button type="button" id="save" onClick={handleSave} class="btn btn-success pull-left">Save</button>
                    <button type="button" id="load" onClick={handleLoad} class="btn btn-success pull-left">Load</button>
                </div>
                </div>
                
           <div className='category-1'>
            <ComparePost categories={currentCategory} loading={loading} city1Prices={city1Prices} city2Prices={city2Prices} host={host} foreign={foreign}/>
            <PaginationCompare categoriesPerPage={categoriesPerPage} totalPosts={categories.length} paginate={paginate}/>
           </div>
            

            <div className="note">
                <h4 >Note</h4>
                <p style={{color:'red'}} className="item-n" >* <span className="item-name">0 means, we have no value to compare</span></p> 
            </div>
        </div>
        )
   }
   
}
export default Compare;