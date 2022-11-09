import "./ProfileHeader.css";
export default function ProfileHeader()
{
    const fname = "Kendall";
  const lname = "Boesch";
  const username = "kendall.boeschh";
  const bio = "~bio~";


import "./ProfileHeader.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function ProfileHeader(props) {
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
          <h1 class="nameHeader ui ">
            {fname} {lname}
          </h1>
          <section class="UserAndBio">
            <h2 class="username ui">
              @{username}
            </h2>
            <p class="bio ui">
              {bio}
            </p>
          </section>
        </section>
      </span>
      <br />
    </div>
  );
}
