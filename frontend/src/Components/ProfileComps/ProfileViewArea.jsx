import { useState } from "react" 
import React from "react" ;
import ItemCard from "./ItemCard";
import "./ProfileViewArea.css";


export default function ProfileViewArea()
{
    
    return(
        <div class="viewArea">
             <ItemCard/>
             <ItemCard/>
             <ItemCard/>

        </div>

    );
}