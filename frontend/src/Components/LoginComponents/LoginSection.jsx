import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAsyncUsers, loginUser, loginUser2 } from "../../API/Api";
import { AppContext } from "../../context";
import { user } from "../../Models";
import "./LoginSection.css";

export default function LoginSection() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [temp, setTemp] = useState(null);
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const unameChange = (event) => setUname(event.target.value);
  const passChange = (event) => setPass(event.target.value);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(uname, pass).then((x) => context.setUser(x));
    console.log(context.user);
  };

  if (context.user) {
    navigate("/profiles");
  }

  // Error messages
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //Displays while User is not logged in
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}