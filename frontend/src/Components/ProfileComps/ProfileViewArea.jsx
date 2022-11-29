import { useState } from "react" 
import React from "react" ;
import ItemCard from "./ItemCard";
import "./ProfileViewArea.css";
import { auction } from "../../Models";
import { useEffect } from "react";
import { Grid } from "@mantine/core";



export default function ProfileViewArea({items})
{
    const [auctions, setAuctions] = useState();
    useEffect(() => {
        setAuctions(items); 
        //getUserSelling(props.id).then(x => setAuctions(x)); 
    }, [{items}]); 
    // useEffect(() => {
    //     if(view ==0)
    //     {
    //         setAuctions(user.selling);
    //     }
    //     else if({view} == 1)
    //     {
    //         setAuctions(user.purchased);
    //     }
    //     else if(view == 2)
    //     {
    //         setAuctions(user.likes);
    //     }
    //     else if(view == 3)
    //     {
    //         setAuctions(user.activeBids);
    //     }
        
    // }, [{view}]); 

    function toAuction(auc) {
        console.log(auc);
        window.location.pathname = "/";
      }

    if(auctions == null) 
    {
        return <div>loading...</div>; 
    }
 
   

    return(
        <>
    
                    {/* <ReviewForm onReviewAdded = { review => addReview({reviews: [...product.reviews, review]})}/> */}

        <div class="view2Area" className=' container list-unstyled d-flex justify-content-between flex-wrap w-100'>
                {auctions.map((auction, index) => (
                    <li key ={index}> 
                    <div className='card h-100 m-3 mb-3'> 
                        <ItemCard
                                id = {auction.id}
                                 imageUrl = {auction.imageUrl}
                                 title ={auction.title}
                                 seller = {auction.seller}
                                 price = {auction.price}
                                 link ='/'/>    
                    </div>
                 
                    </li> 
                ))}

               </div>

        </>

    );
}
