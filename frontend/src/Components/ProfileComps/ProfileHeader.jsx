import "./ProfileHeader.css";
import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';

export default function ProfileHeader(props)
{
  return (
    //make photo inline block!

    <div class="profileHeader">
      <span class=" profileHeaderContainer ui fixed">
        <img
          class="image profilePic"
          src={props.ProfilePicture}
          alt="temporary profile pic"
        />

        <section class="profileInfoContainer">
          <h1 className="font-size-auto ">
            {props.DisplayName}
          </h1>
    
          <section class="UserAndBio">
            <h2 class="username ui">
              @{props.id}
            </h2>
            <p class="bio ui">
              {props.Bio}
            </p>
          </section>
        </section>
      </span>
      <br />
  

    </div>
  );
}