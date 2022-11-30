import "./ProfileHeader.css";
import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function ProfileHeader(props) {
  return (
    //make photo inline block!

    <div className="profileHeader container">
      <div classNAme=" container  ui fixed">
        <img
          className="image profilePic"
          src={props.ProfilePicture}
          alt="temporary profile pic"
        />

          <h1 className="font-size-auto ">{props.DisplayName}</h1>

          <section className="UserAndBio">
            <h2 className="username ui">{props.Email}</h2>
            <p className="bio ui">{props.Bio}</p>
          </section>
      </div>
      <br />
    </div>
  );
}
