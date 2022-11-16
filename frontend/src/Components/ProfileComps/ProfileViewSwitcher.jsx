import React from "react"
import { useState, userEffect } from "react";
import "./ProfileViewSwitcher.css";
import { Navbar, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileViewArea from "./ProfileViewArea";
import { User } from "../../user";


export default function ProfileViewSwitcher({user})
{
  const [view,setView] = useState();

  useEffect(()=>
  {
      setView(1);          
  }, []);

    return (
    <Navbar id="toggler" variant="dark">
        <div id="toggleContainer">
          <button onClick={() => setView(1)} > Selling
          {/* <NavLink href="/profile">Selling</NavLink> */}
          </button>
          <button onCLick={() => setView(2)}> Purchased
          {/* <NavLink href="/login">Purchased</NavLink> */}
          </button>
          <button onClick={() => setView(3)}> Likes
          {/* <NavLink href="/auctions">Likes</NavLink> */}
          </button>
          <button onClick={() => setView(4)}> Active Bids
          {/* <NavLink href="/auctions">Active Bids</NavLink> */}
          </button>
          {this.view == 1 ? <ProfileViewArea items={user.selling} /> : ''}
          {this.view == 2 ? <ProfileViewArea items={user.purchased} /> : ''}
          {this.view == 3 ? <ProfileViewArea items={user.likes} /> : ''}
          {this.view == 4 ? <ProfileViewArea items={user.activeBids}/> : ''}
          
        </div>  
        
        {/* {this.state.view == 1}  */}
{/* 
        {this.state.view === 1 ? <View1></View1> : ''}
            {this.state.view === 2 ? <View2></View2> : '' */}
    </Navbar>
  );

}
