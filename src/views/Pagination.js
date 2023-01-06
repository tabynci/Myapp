import React from "react";
 const Pagination =({pricesPerPage, totalPosts, paginate}) =>{
    // console.log(pricesPerPage, totalPosts)
const pageNumbers=[];
    for (let i=1; i<=Math.ceil(totalPosts/pricesPerPage); i++){
        pageNumbers.push(i);
    }
    // console.log(pageNumbers)
    
    return(
        <nav>
            <ul className="pagination">
            
            {
                pageNumbers.map(number=>{    
                    return(
                        <div>
                            <li  key={number} className="page-item">
                            <a onClick={()=>{paginate(number)}} href="#" className="page-link"> {number}</a>
                        </li>
                        </div>
                        
                    )
                })
            }
            </ul>
        </nav>
    )
 }
 export default Pagination;