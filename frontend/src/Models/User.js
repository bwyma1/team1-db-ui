import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export class User {
    constructor(id,Email, DisplayName, Bio, ProfilePicture, Tags, Password, Selling, Likes, Purchased, ActiveBids) {
        this.id = id;
export class user {
    constructor(Email, DisplayName, Bio, ProfilePicture, Tags, Password) {
        this.Email = Email;
        this.DisplayName = DisplayName;
        this.Bio = Bio;
        this.ProfilePicture = ProfilePicture;
        this.Tags = Tags;
        this.Password = Password;
        this.Selling = Selling;
        this.Likes = Likes
        this.Purchased = Purchased; 
        this.ActiveBids = ActiveBids; 
    }
};
