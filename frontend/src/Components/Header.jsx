import MyNavbar from "./NavigationBar/MyNavbar";

export default function Header(props) {
  return (
    <header className="App-header">
      <MyNavbar props={props} />
    </header>
  );
}
