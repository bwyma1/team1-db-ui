import { useState } from "react" 
import React from "react" ;
import ItemCard from "./ItemCard";
import "./ProfileViewArea.css";
import ViewFilter from "./ViewFilter";


export default function ProfileViewArea()
{
    
    return(
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

    );
}