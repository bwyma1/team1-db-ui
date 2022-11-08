import "./ProfileHeader.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

<<<<<<< HEAD
export default function ProfileHeader(props)
{

=======
export default function ProfileHeader(props) {
>>>>>>> origin
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
          <h1 className="font-size-auto ">{props.DisplayName}</h1>

          <section class="UserAndBio">
            <h2 class="username ui">
              {props.Email}
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
