import React from "react";
 const PaginationCompare =({categoriesPerPage, totalPosts, paginate}) =>{
    // console.log(categoriesPerPage, totalPosts)
const pageNumbers=[];
    for (let i=1; i<=Math.ceil(totalPosts/categoriesPerPage); i++){
        pageNumbers.push(i);
    }
    // console.log(pageNumbers)
    
    return(
        <div>
            <nav>
                <ul  className="pagination">
                {
                    pageNumbers.map(number=>{    
                        return(
                            <div>
                                <li key={number} className="page-item">
                                <a onClick={()=>{paginate(number)}} href="#" className="page-link"> {number}</a>
                            </li>
                            </div>
                            
                        )
                    })
                }
                </ul>
            </nav>
        </div>
    )
 }
 export default PaginationCompare;