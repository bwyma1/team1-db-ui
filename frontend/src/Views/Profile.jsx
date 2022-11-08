import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ItemCard from "../Components/ProfileComps/ItemCard";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";



export default function Profile() {
  const fname = "Kendall";
  const lname = "Boesch";
  const username = "kendall.boeschh";
  const bio = "~bio~";
  //var myProfile = true; 


  return (
    

    <div id="pageContainer">
      <span id="profileContainer" class="ui fixed">
        <img
          class="image"
          src="https://via.placeholder.com/150x150"
          id="tempProfPic"
          alt="temporary profile pic"
        />

        <section id="profileInfoContainer">
          <h1 id="nameHeader" class="ui ">
            {fname} {lname}
          </h1>
          <section id="UserAndBio">
            <h2 id="username" class="ui">
              @{username}
            </h2>
            <p id="bio" class="ui">
              {bio}
            </p>
          </section>
        </section>
      </span>
      <br />

  
        <div id="toggler">
          <ProfileViewSwitcher/>
        </div>

        <div> 

          <ProfileViewArea/>
        </div>
  

    </div>
  );
}
