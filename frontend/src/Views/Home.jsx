import MyImageSlider from "../Components/MyImageSlider";
import MyHomepageFooter from "../Components/MyHomepageFooter.jsx";

export default function Home() {
  return (
    <div>
      <MyImageSlider />
      <a href="/AuctionPage">Auctions</a>
      <MyHomepageFooter />
    </div>
  );
}
