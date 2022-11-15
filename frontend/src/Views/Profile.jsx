import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ItemCard from "../Components/ProfileComps/ItemCard";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";



export default function Profile() {
  const fname = "Kendall";
  const lname = "Boesch";
  const username = "kendall.boeschh";
  const bio = "~bio~";
  //var myProfile = true; 


  return (
    

    <div id="pageContainer">
      <div> 
        <ProfileHeader/>
      </div>
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
