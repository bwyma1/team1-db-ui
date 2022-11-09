import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
import { useState } from "react";
import { auction } from "../Models";
import { useEffect } from "react";
import { user } from "../Models";
import data from "../Components/data";
import { getAsyncAuctions, getUserById } from "../API/Api"; 
import { AppContext } from "../context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

export default function Profile() 
{
  const navigate = useNavigate(); 
  const [user,setUser]=useState();
  const [auctions, setAuctions] = useState(null); 
  const [test, setTest]= useState(null)

  const params = useParams(); 
  useEffect(() => {
    //getAsyncAuctions().then((x)=>set)
      //getUserById(params.Email).then(x=>setUser(x)); 
      setAuctions(exampleData); 

  },[]);

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
        <ProfileViewSwitcher items={auctions} />
      </div>

  
    </div>
  );
}

let exampleUser1 = new user('email@gmail.com', 'John Doe', 'Art!', "https://via.placeholder.com/150x150", 0); 
let exampleUser2 = new user('email6@gmail.com', 'Jane Doe', '!!!', "https://via.placeholder.com/150x150", 0); 
let exampleUser3 = new user('ema4il@gmail.com', 'Joe Doe', 'Art!', "https://via.placeholder.com/150x150", 0); 

let exampleData = [
  new auction(
    2,
    2,
    "Truman",
    "7",
    "https://via.placeholder.com/150x200",
    "19.99",
    "date-listed",
    [("Friendly", "Light", "Rennaissance")],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    3,
    3,
    "Brock",
    "8",
    "https://via.placeholder.com/200x150",
    "129.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "cool!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    4,
    4,
    "Newman",
    "9",
    "https://via.placeholder.com/1500x2000",
    "19.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    5,
    5,
    "ThisName",
    "9",
    "https://via.placeholder.com/1500x2000",
    "19.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
];