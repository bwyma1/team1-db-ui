import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../API/Api";
import { AppContext } from "../../context";
import { user } from "../../Models";
import "./LoginSection.css";

export default function LoginSection() {
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const unameChange = (event) => setUname(event.target.value);
  const passChange = (event) => setPass(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(uname, pass).then((x) => context.setUser(x));
    console.log(context.user);
  };

  if (context.user) {
    window.sessionStorage.setItem(
      "user",
      JSON.stringify(
        new user(
          context.user.Email,
          context.user.DisplayName,
          context.user.Bio,
          context.user.ProfilePicture,
          context.user.Password,
          context.user.Strikes
        )
      )
    );
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
          <label>Email </label>
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
