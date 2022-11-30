
import './App.css';
import Header from './Components/Header';
import Backend from './Views/Backend';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Login from './Views/Login';
import Notifications from './Views/Notifications';
import { useEffect, useState } from 'react';
import Profile from './Views/Profile';

import { getUsers, getAsyncUsers} from './API/Api';
import { MantineProvider} from '@mantine/core';
import Auctions from './Views/Auctions';
import AuctionPage from './Views/AuctionPage'
import NotificationContainer from './Components/NotificationContainer';
import { AppProvider } from './context';
import Error from './Views/Error';
import PostAuction from './Views/PostAuction';

// React functional component
function App () {
  

  useEffect(() => {
    //getAsyncUsers();
  }, []);


  return (
    
    <AppProvider>
    <MantineProvider>
    <Router>
      <div className="App">
        <Header/>
        <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/profiles" element={<Profile />}></Route>
              <Route path="/auctions" element={<Auctions />}></Route>
              <Route path="/auctions/:id" element={<AuctionPage />}/>
              <Route path="/postAuction" element={<PostAuction />}></Route>
              <Route path="*" element={<Error />} ></Route>

              <Route path="/AuctionPage" element={<AuctionPage />} ></Route>

            </Routes>
        </main>
      </div>
    </Router>

    </MantineProvider>
    </AppProvider>
  );
}



export default App;
