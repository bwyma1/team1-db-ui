import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
import ViewFilter from "../Components/ProfileComps/ViewFilter";
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

        <div clasName ="row flex main container"> 
      
            <ViewFilter/>
         
          <ProfileViewArea/>
        </div>
  

    </div>
  );
}
