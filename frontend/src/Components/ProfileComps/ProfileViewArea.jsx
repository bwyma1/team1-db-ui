import { useState } from "react"
import React from "react";
import ItemCard from "./ItemCard";
import ProfileViewSwitcher from "./ProfileViewSwitcher";
import "./ProfileViewArea.css";
import ViewFilter from "./ViewFilter";



export default function ProfileViewArea({ items }) 
{
    const [auctions, setAuctions] = useState();
    useEffect(() => {
        setAuctions(items);
        //getUserSelling(props.id).then(x => setAuctions(x)); 
    }, []);

    if (auctions == null) {
        return <div>loading...</div>;
    }



    return (
        <>
            <ProfileViewSwitcher />
            <div class="view2Area">



            </div>
            <>

                {/* <ReviewForm onReviewAdded = { review => addReview({reviews: [...product.reviews, review]})}/> */}

                <div class="view2Area" className=' container list-unstyled d-flex justify-content-center flex-wrap w-100'>
                    {auctions.map((auction, index) => (
                        <li className='m-2' key={index}>
                            <div className='card h-100 m-3 mb-3'>
                                <ItemCard
                                    Image={auction.Image}
                                    Title={auction.Title}
                                    OwnerName={auction.OwnerName}
                                    StartPrice={auction.StartPrice}
                                    LeadBid={auction.LeadBid}
                                    EndDate={auction.EndDate}
                                    Description={auction.Description} />

                            </div>

                        </li>
                    ))}

                </div>
                </>

            </>);


}