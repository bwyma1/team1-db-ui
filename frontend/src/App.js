
import './App.css';
import Header from './Modules/Header';
import Backend from './Views/Backend';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Views/Home';
import Login from './Views/Login';
import Notifications from './Views/Notifications';
import Profile from './Views/Profile';

// React functional component
function App () {
  return (
    <Router>
      <div className="App">
        <Header />
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
