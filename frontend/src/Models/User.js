import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export class user {
    constructor(Email, DisplayName, Bio, ProfilePicture, Tags, Password) {
        this.Email = Email;
        this.DisplayName = DisplayName;
        this.Bio = Bio;
        this.ProfilePicture = ProfilePicture;
        this.Tags = Tags;
        this.Password = Password;
    }
};
