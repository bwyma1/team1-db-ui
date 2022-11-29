import React from "react"
import { useState, useEffect } from "react";
import "./ProfileViewSwitcher.css";
import { Navbar, NavLink } from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileViewArea from "./ProfileViewArea";

import {User} from "../../Models";
export default function ProfileViewSwitcher({user})
{
  const [items,setItems]=useState(undefined); 

  useEffect(() => {
    setItems(user.selling)
  },[])



    return (
      <>    
      
      <Navbar id="toggler" variant="dark">
        <div id="toggleContainer">
        <button onClick={() => setItems(user.selling)}> Selling</button>
        <button onClick={() => setItems(user.purchased)}> Purchased</button>
        <button onClick={() => setItems(user.likes)}> Likes</button>
        <button onClick={() => setItems(user.activeBids)}> Active Bids
        </button>
        
        </div>  
        

    </Navbar>

    <ProfileViewArea
                      items={items}
                    />
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
