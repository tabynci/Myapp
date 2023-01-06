
import {useState} from 'react'
import {Link} from 'react-router-dom'
import React from 'react'

function Search(){
    
    const [city_name, setCityName]=useState('')

    function handleCityInput(e){
        e.preventDefault()
        sessionStorage.setItem("city", '')
        setCityName(e.target.value) 
        sessionStorage.setItem("city", e.target.value)
            
    }   

    return(
        <div>
            <form className="d-flex left-padding" role="search">
          <input value={city_name} onChange={handleCityInput} className="form-control me-2 item-font" type="search" placeholder="Enter city name" aria-label="Search"></input>
          <Link className="nav-link active text-light item-font" to="/CostOfLivingAndExpenses">Search</Link>
        </form>
       
        </div>
    )
        
    
}
export default Search;