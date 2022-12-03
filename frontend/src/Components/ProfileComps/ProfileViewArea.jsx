import { useState, useEffect } from "react";
import React from "react";
import ItemCard from "./ItemCard";
import "./ProfileViewArea.css";
import { Grid } from "@mantine/core";
//displays the item cards on the profile page
export default function ProfileViewArea({ items }) {
  const [auctions, setAuctions] = useState();
  useEffect(() => {
    setAuctions(items);
    //getUserSelling(props.id).then(x => setAuctions(x));
  }, [items]);

  if (auctions == null) {
    return <div>loading...</div>;
  }

  return (
    <>
      {/* <ReviewForm onReviewAdded = { review => addReview({reviews: [...product.reviews, review]})}/> */}

      <Grid className=" container list-unstyled d-flex justify-content-center flex-wrap w-100">
        {auctions.map((auction, index) => (
          <Grid.Col lg={3} md={4} sm={5} key={index}>
            <div className="card h-100 m-3 mb-3">
              <ItemCard
                Image={auction.Image}
                Title={auction.Title}
                OwnerName={auction.OwnerName}
                StartPrice={auction.StartPrice}
                LeadBid={auction.LeadBid}
                EndDate={auction.EndDate}
                Description={auction.Description}
              />
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
