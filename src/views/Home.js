import React from "react";
import m from '../images/m.jpg'
import u from '../images/u.jpg';
function Home(){
    return(
      <div className="home-background">

          <div class="circular_image">
          <img src={u}></img>
           </div>

          <div >
          <p className="text-home">Cost of living <br></br>differences between<br></br> India and Ireland</p>
          </div>

      </div>
    )
  
}
export default Home;