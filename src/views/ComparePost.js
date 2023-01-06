import React from "react";
import Table from 'react-bootstrap/Table';
// import { useState} from "react";
const ComparePost =({categories,loading,city1Prices, city2Prices, host, foreign })=>{
   
    if(loading){
        return <h2>loading..</h2>
        } 

    return(
    <div className="div-table">
    <Table className="table-compare" striped bordered hover>
        <thead>
            <tr className="cat-color">
                 <th className="categories">Categories</th>
                <th className="categories">Item</th>
                <th className="categories">{host}</th>
                <th className="categories">{foreign}</th>
         </tr>
        </thead>
        <tbody>
        {
            categories.map((category)=>{
                if(category){
                const price1 = city1Prices.filter((pr)=> { 
                        return pr.category_name===category.category_name && pr.item_name===category.item_name})[0]
                const city1P =price1? price1.usd: undefined;

                const price2 = city2Prices.filter((pr)=> { 
                    return pr.category_name===category.category_name && pr.item_name===category.item_name})[0]
                const city2P =price2? price2.usd: undefined
                
            return (<tr className="cat-Design"> <td>{category.category_name}</td>
                    <td>{category.item_name}</td>
                <td>Minimum: <span className="dollar">&#36;</span>{city1P?city1P.min:0}<br></br>Maximun: <span>&#36;</span>{city1P?city1P.max:0}</td>
                <td>Minimum: <span>&#36;</span>{city2P?city2P.min:0}<br></br>Maximun: <span>&#36;</span>{city2P?city2P.max:0}</td>
            </tr>);
            }})
        }
        </tbody>
    </Table>
   
</div>
)

}
export default ComparePost;