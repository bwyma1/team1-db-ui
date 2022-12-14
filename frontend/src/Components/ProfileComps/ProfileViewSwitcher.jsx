import { useState, useEffect } from "react";
import "./ProfileViewSwitcher.css";
import { Navbar, NavLink } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileViewArea from "./ProfileViewArea";
import { auction } from "../../Models";
import { user } from "../../Models";

export default function ProfileViewSwitcher({ user, auctions }) {
  const [items, setItems] = useState(undefined);
  let temp = useState([]);

  const filterToSelling = () => {
    temp = [];
    auctions.filter((auction) => {
      if (auction.OwnerName == user.DisplayName) {
        temp.push(auction);
        return auction;
      }
    });
  };

  useEffect(() => {
    filterToSelling();
    setItems(temp);
  }, []);

  return (
    <>
      <Navbar id="toggler" variant="dark">
        <div
          id="toggleContainer"
          style={{
            background: "linear-gradient(#ed6ea0, #ec8c69)",
          }}
        >
          <button
            style={{
              background: "linear-gradient(#ed6ea0, #ec8c69)",
            }}
            onClick={() => filterToSelling().then(() => setItems(temp))}
          >
            {" "}
            Selling
          </button>
        </div>
      </Navbar>

      <ProfileViewArea className="d-flex" items={items} />
    </>
  );

  // return (
  //   <div className="wrapper">
  //     <BrowserRouter>
  //       <nav>
  //         <ul>
  //           <li><Link to="/selling">Selling</Link></li>
  //           <li><Link to="/purchased">Purchased</Link></li>
  //           <li><Link to="/likes">Likes</Link></li>
  //           <li><Link to="/activeBids">Active Bids</Link></li>
  //         </ul>
  //       </nav>
  //       <Routes>
  //         <Route path="/selling"
  //           element={<ProfileViewArea useState="selling" />}/>
  //         <Route path="/purchased"
  //           element={<ProfileViewArea useState="purchased"/>}/>
  //         <Route path="/likes"
  //           element={<ProfileViewArea useState="likes" />}/>
  //         <Route path="/activeBids"
  //           element={<ProfileViewArea useState="activeBids" />}/>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
}
