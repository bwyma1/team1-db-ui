import MyImageSlider from "../Components/MyImageSlider";
import MyHomepageFooter from "../Components/MyHomepageFooter.jsx";
import { AppContext } from "../context";
import { useContext } from "react";

export default function Home() {
  const context = useContext(AppContext);
  return (
    <div>
      <MyImageSlider />
      <a href="/AuctionPage">Auctions</a>
      <MyHomepageFooter />
      <div>{context.user}</div>
    </div>
  );
}
