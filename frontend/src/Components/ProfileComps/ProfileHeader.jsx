import "./ProfileHeader.css";
import React from "react";
//This is the top of the profile page which displays the name and information about a user
export default function ProfileHeader(props) {
  return (
    
    <>
      <div className="profileHeader container">
        <div className=" container  ui fixed">
          <img
            className="image profilePic"
            src={props.ProfilePicture}
            alt="temporary profile pic"
            style={{ maxWidth: "20rem" }}
          />
        </div>

        <div className="d-flex row flex-align-start">
          <h1
            className="flex-align-start"
            style={{
              fontSize: "10rem",
              fontWeight: "bolder",
            }}
          >
            {props.DisplayName}
          </h1>

          <section className="UserAndBio">
            <h2 className="username ui">{props.Email}</h2>
          </section>
        </div>
        <br />
      </div>
    </>
  );
}
