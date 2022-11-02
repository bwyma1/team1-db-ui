import "./Profile.css";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";



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

      <div id="profViewToggler">
        <button>Selling  </button>
        <button> Purchased </button>
        <button> Likes </button>
        <button> Active Bids </button>
      </div>
      <div id="viewArea" class ="container">

        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content1"
          alt="temporary profile pic"
        />

        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content2"
          alt="temporary profile pic"
        />

        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content3"
          alt="temporary profile pic"
        />
        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content4"
          alt="temporary profile pic"
        />

        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content5"
          alt="temporary profile pic"
        />

        <img
          class="content"
          src="https://via.placeholder.com/150x150"
          id="content6"
          alt="temporary profile pic"
        />




      </div>

    </div>
  );
}
