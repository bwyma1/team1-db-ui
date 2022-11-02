import "./Profile.css";
import ProfileViewSwitcher from "../Modules/ProfileViewSwitcher";
import pieceCard from "../Modules/pieceCard";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

export default function Profile() {
  // e
  // const [likes, setLikes] = useState([]);
  //const [activeBids, setActiveBids] = useState([]);

  //var myProfile = true;

  return (
    <div id="pageContainer">
      <div>
        <ProfileHeader
          id={exampleUser.id}
          DisplayName={exampleUser.DisplayName}
          Bio={exampleUser.Bio}
          ProfilePicture={exampleUser.ProfilePicture}
          Tags={exampleUser.Tags}
        />
      </div>
      <br />


        <div id="toggler">
          <ProfileViewSwitcher/>
        </div>
        <div class="temp">
          <pieceCard/>
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

let exampleUser = new user(
  "kendall.boeschh",
  "kboesch@smu.edu",
  "Kendall Boesch",
  "~bio~",
  "https://via.placeholder.com/150x150",
  ["tag1", "tag2"],
  "12345678",
  [
    new auction(
      1,
      1,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      2,
      2,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      3,
      3,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      4,
      4,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      5,
      5,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      6,
      6,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      7,
      7,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      8,
      8,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      9,
      9,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      10,
      10,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      11,
      11,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      12,
      12,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
  ],
  [
    new auction(
      120,
      120,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      121,
      121,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      122,
      122,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      123,
      123,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      124,
      124,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      125,
      125,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      126,
      126,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      127,
      127,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      128,
      128,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
  ],
  [
    new auction(
      129,
      129,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      130,
      130,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      131,
      131,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      132,
      132,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      133,
      133,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      134,
      134,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      135,
      135,
      "SAMPLE",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
  ],
  [
    new auction(
      9,
      9,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      10,
      10,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      11,
      11,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
    new auction(
      12,
      12,
      "kendall.boeschh",
      80.0,
      "https://via.placeholder.com/150x150",
      8.0,
      "01/01/01",
      ["tag1", "tag2", "tag3"],
      "10/24/23",
      "Title",
      "Artwork description here..."
    ),
  ]
);
