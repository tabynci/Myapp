import React from "react";
import _ from 'lodash'
 const PricesPost =({prices,loading })=>{

    var catgroup=_.groupBy(prices, 'category_name');
    // console.log(catgroup)
if(loading){
return <h2>loading..</h2>
}
return (

Object.keys(catgroup).map((catgory) => (
    // console.log(catgory);
<div className="cat-color">
<ul className="list-group no-paddning">
    <span className="cat">{catgory}</span>
    {prices.map(price=>{
        if(price.category_name===catgory)
        return(<div className="cat-div">

      
        <li key={price.id} className="list-group-item no-paddning">
        <p className="Item"> Item Name: <span className="item-name">{price.item_name}</span></p>
        <p className="Item"> Max:  <span className="item-name"><span className="dollar">&#36;</span>{price.max}</span></p>
        <p className="Item"> Min:  <span className="item-name"><span className="dollar">&#36;</span>{price.min}</span></p>
        </li>
        </div>
        )
    })}
</ul>
</div>
    

)));
 }
 export default PricesPost;