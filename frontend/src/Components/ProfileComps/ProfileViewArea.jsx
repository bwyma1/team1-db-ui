import { useState } from "react" 
import React from "react" ;
import ItemCard from "./ItemCard";
import ProfileViewSwitcher from "./ProfileViewSwitcher";
import "./ProfileViewArea.css";
import ViewFilter from "./ViewFilter";


export default function ProfileViewArea(props)
{
    const [view, setView] = useState(); 

    const [items, setItems] = useState([]);
    return(
        <>
        <ProfileViewSwitcher />
        <div class="view2Area">
            
            {/* <div> 
               // <ViewFilter/>
            </div> */}
            <div class='viewArea'> 


             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>
            </div>

        </div>

        </>

    );
}


// {props.reviews.length===0 && 
//     <li  
//         style={{listStyle:"none"}}
//         className="list-group-item bg-gray"> Be the first to add a review!</li>
// } 
// {props.reviews.map((rev, i)=> 
//     <li className ="reviewLi" key = {i}>
//         <span className="navbar navbar-light bg-grey">
//             <Rating value={rev.rating}/>
//         </span>
//         <div className = "upperBridge">
//             <span className =" upper username">
//                 {rev.userName}
//             </span>
//             <span className =" upper date">
//                 {rev.date}
//             </span>
//         </div>
//         <div className ="lower">
//             <p className="comment">"{rev.comment}"</p>
//         </div>
//     </li>)
// }