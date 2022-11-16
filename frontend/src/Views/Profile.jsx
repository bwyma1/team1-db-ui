import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
import { useState } from "react";
import ViewFilter from "../Components/ProfileComps/ViewFilter";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";


export default function Profile({props}) {

  const [fName, setFName] = useState('Kendall'); // {props.name}? 
  const [lName, setLName] = useState('Boesch');
  const [username, setUsername] = useState('kendall.boeschh'); 
  const [bio, setBio] = useState('~bio~'); 
  const [selling, setSelling] = useState([]); 
  const [purchased, setPurchased] = useState([]); 
  const [likes, setLikes] = useState([]); 
  const [activeBids, setActiveBids] = useState([]);

  const [view, setView] = useState(1); 

  //var myProfile = true; 

  return (


    <div id="pageContainer">
      <div>
        <ProfileHeader />
      </div>
      <br />


      {/* <div id="toggler">
        <ProfileViewSwitcher />
      </div> */}

      <span clasName="row flex main container">

          <ProfileViewArea />

        
      </span>


    </div>
  );
}
