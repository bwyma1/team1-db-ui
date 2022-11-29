import "./Profile.css";
import ProfileViewSwitcher from "../Components/ProfileComps/ProfileViewSwitcher";
import ProfileViewArea from "../Components/ProfileComps/ProfileViewArea";
import ProfileHeader from "../Components/ProfileComps/ProfileHeader";
import { useState } from "react";
import { auction } from "../Models";
import { user  } from "../Models";
import data from "../Components/data";
//import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";


export default function Profile() {
// e 
 // const [likes, setLikes] = useState([]); 
  //const [activeBids, setActiveBids] = useState([]);


  //var myProfile = true; 

  return (


    <div id="pageContainer">
      <div>
        <ProfileHeader  id={exampleUser.id}
                        name={exampleUser.name}
                        bio={exampleUser.description}
                        imageUrl={exampleUser.imageUrl}/>
      </div>
      <br />


      <div id="toggler">
        <ProfileViewSwitcher user={exampleUser}
                              />
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

let exampleUser = 

  new user(
      'kendall.boeschh', 
      'Kendall Boesch', 
      '~bio~',
      "https://via.placeholder.com/150x150",
      [
        'tag1',
        'tag2'
      ], 
      [
        new auction(3, 'kendall.boeschh', "title sel1 ", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(4, "kendall.boeschh", "title sel2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(5, "kendall.boeschh", "title sel3", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(16, "kendall.boeschh", "title sel4", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(17, "kendall.boeschh", "title sel5", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(18, "kendall.boeschh", "title sel6", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(14, "kendall.boeschh", "title sel7", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(19, "kendall.boeschh", "title sel7", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(20, "kendall.boeschh", "title sel7", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(21, "kendall.boeschh", "title sel7", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(22, "kendall.boeschh", "title sel7", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(15, "kendall.boeschh", "title sel8", "desc", 8.00, "https://via.placeholder.com/150x150", [], [])
      ],
      [
        new auction(6, 'seller A', "title pur1 ", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(7, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(23, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(25, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(26, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(27, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(28, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(29, "seller", "title pur2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(24, "seller", "title pur3", "desc", 8.00, "https://via.placeholder.com/150x150", [], [])
      ],
      [
        new auction(6, 'seller A', "title pur1 ", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(0, "seller2", "title like00", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(1, "seller2", "title like01", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(2, "seller3", "title like02", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(13, "johnnyd123", "title s5", "desc", 8.00, "https://via.placeholder.com/150x150", [], [])
      ],
      [
        new auction(9, 'seller', "title act1 ", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(10, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(30, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(31, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(32, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(33, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(34, "seller", "title act2", "desc", 8.00, "https://via.placeholder.com/150x150", [], []),
        new auction(11, "seller", "title act3", "desc", 8.00, "https://via.placeholder.com/150x150", [], [])
      
      ]
  )


