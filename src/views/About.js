import Ab from '../images/Ab.jpeg';
import ab from '../images/p.jpg'
// https://www.vecteezy.com/photo/1884716-minimal-office-desk-table-with-keyboard-computer-coffee-cup-mouse-white-pen-cotton-flowers-on-a-white-table-with-copy-space-for-input-your-text-white-color-workplace-composition-flat-lay-top-view
function About(){
    return(
        <div className='About'>
            <div className='center'><img src={Ab} width="30%" height="30%"></img></div>
            <div className='con-div'>
                        
                        <img src={ab} width="80%" height="70%"></img>
                     

                        <div className='div-paragragp'>
                        <h1 className='website'>OUR WEBSITE</h1>
                         <p className='paragraph'>Our website, "Cost OF Living and Prices," allows users to browse data and contrast it between two cities, such as Ireland and India. An Indian user would be able to view prices in  Ireland and compare them to those of their hometown. The user may now obtain a better sense of the various expenses in the city or nation, which will aid them in responding to some often asked questions or determining what to think about before moving to a new city or country.
                        Users of this software can find out how much it costs to live in the country and how much items like food, rent, and shopping cost. We compile data on the cost of living, travel, and relocation to assist our users, tourists, and residents in expanding their horizons.</p>
                        <div className='div-li'>
                        <h4>Our promise to you</h4>
                        <ul>
                        <p><li>Users needs and wants come first</li>
                        <li>Immdeiate assistance</li>
                        <li>Dignity and respect</li>
                        <li>Fast and efficient problem solving</li>
                        <li>Impartial and confidential advice</li>
                        <li>Recommendtaion of useful services</li>
                        <li>Specific leaflets and information</li>
                        </p>
                        </ul>
                        </div>
                        
                        </div>
            </div>
            
            
           
        </div>
    )
}
export default About;