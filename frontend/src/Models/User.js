import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export class user {
    constructor(Email, DisplayName, Bio, ProfilePicture, Password, Strikes) {
        this.Email = Email;
        this.DisplayName = DisplayName;
        this.Bio = Bio;
        this.ProfilePicture = ProfilePicture;
        this.Password = Password;
        this.Strikes = Strikes;
    }
};
//window.localstorage.getitem("user")