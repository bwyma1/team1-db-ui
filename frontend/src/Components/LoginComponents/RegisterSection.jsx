import { useState } from "react";
import { addUser } from "../../API/Api";
import { user } from "../../Models";
import "./RegisterSection.css";

//handles logic for new users and adding login information
export default function RegisterSection() {
  const [errorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const emailChange = (event) => setEmail(event.target.value);
  const unameChange = (event) => setUname(event.target.value);
  const passChange = (event) => setPass(event.target.value);
  const profilePicChange = (event) => setProfilePic(event.target.value);

  const submitRegistration = (event) => {
    //Prevent page reload
    event.preventDefault();
    register();
  };

  function register() {
    addUser(new user(email, uname, "Bio", profilePic, pass, 0));
    setIsSubmitted(true);
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={submitRegistration}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChange}
            required
          />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            value={uname}
            onChange={unameChange}
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={pass}
            onChange={passChange}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Profile Picture </label>
          <input
            type="text"
            name="prof-pic"
            value={profilePic}
            onChange={profilePicChange}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div className="register-form">
        <div className="title">New to Arction</div>
        {isSubmitted ? <div>User is successfully Registered</div> : renderForm}
      </div>
    </div>
  );
}
