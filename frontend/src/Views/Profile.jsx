import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
import { useState } from "react";
import { auction } from "../Models";
import { useEffect } from "react";
import { user } from "../Models";
import data from "../Components/data";
import { getUserById } from "../API/Api"; 
import { AppContext } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

export default function Profile() 
{
  const [user,setUser]=useState(); 
  
  useEffect(() => {
    setUser(exampleUser1);
  });

  return (
    <div id="pageContainer">
      <div>
        <ProfileHeader
          email={exampleUser1.Email}
          DisplayName={exampleUser1.DisplayName}
          Bio={exampleUser1.Bio}
          ProfilePicture={exampleUser1.ProfilePicture}
          Password={exampleUser1.Password}
        />
      </div>
      <br />

      <div id="toggler">
        <ProfileViewSwitcher user={exampleUser1} />
      </div>

      {/* <span clasName="row flex main container">

          <ProfileViewArea  data={exampleUser}
                            selling={exampleUser.selling}
                            purchased={exampleUser.purchased}
                            likes={exampleUser.likes}
                            activeBids={exampleUser.activeBids} />
      </span> */}
    </div>
  );
}

let exampleUser1 = new user('email@gmail.com', 'John Doe', 'Art!', "https://via.placeholder.com/150x150", 0); 
let exampleUser2 = new user('email6@gmail.com', 'Jane Doe', '!!!', "https://via.placeholder.com/150x150", 0); 
let exampleUser3 = new user('ema4il@gmail.com', 'Joe Doe', 'Art!', "https://via.placeholder.com/150x150", 0); 