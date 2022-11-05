
import './App.css';
import Header from './Components/Header';
import Backend from './Views/Backend';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Login from './Views/Login';
import Notifications from './Views/Notifications';
import { useEffect, useState } from 'react';
import Profile from './Views/Profile';
import { getUsers } from './API/Api';
import { Toaster } from 'solid-toast';

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

  useEffect(() => {
    getUsers().then(x => setUsers(x))
  }, [])

  return (
    <Router>
      <div className="App">
        <Header user={user}/>
        <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/profiles" element={<Profile />}></Route>
              <Route path="*" element={<Backend />} ></Route>
            </Routes>
        </main>
      </div>
      
    </Router>
  );
}



export default App;
