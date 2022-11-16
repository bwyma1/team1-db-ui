
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

// React functional component
function App () {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //const foundUser = JSON.parse(loggedInUser);
      setUser(1);
      console.log(loggedInUser);
      console.log(user);
    }
  }, []);


  // useEffect(() => {
  //   getUsers().then(x => setUsers(x))
  // }, [])
//David B added route for individual auction tests

  useEffect(() => {
    getAsyncUsers().then(x => setUsers(x))
  }, [])


  return (
    <MantineProvider
    theme={{
      colorScheme: 'light',
    }}
  >
    <Router>
      <div className="App">
        <Header user={user}/>
        <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/profiles" element={<Profile />}></Route>
              <Route path="/auctions" element={<Auctions />}></Route>
              <Route path="/auctions/:id" element={<AuctionPage />}/>
              <Route path="*" element={<Backend />} ></Route>

              <Route path="/AuctionPage" element={<AuctionPage />} ></Route>

            </Routes>
        </main>
      </div>
      
    </Router>
    <NotificationContainer/>
    </MantineProvider>
  );
}



export default App;
