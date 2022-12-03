import { useState } from "react";
import LoginSection from "../Components/LoginComponents/LoginSection";
import RegisterSection from "../Components/LoginComponents/RegisterSection";
import "./Login.css";

export default function Login() {
  const [user] = useState(window.sessionStorage.getItem("user"));
  function handleSubmit() {
    window.sessionStorage.removeItem("user");
  }
//displays both the login and register page or if the user is logged in, will show a button to logout
  return (
    <>
      {" "}
      {user ? (
        <div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="button-container">
                <button type="submit">Logout</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <LoginSection />
          <RegisterSection />
        </div>
      )}
    </>
  );
}
