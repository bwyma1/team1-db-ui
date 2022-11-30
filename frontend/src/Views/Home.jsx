import MyImageSlider from "../Components/MyImageSlider";
import MyHomepageFooter from "../Components/MyHomepageFooter.jsx";
import { AppContext } from "../context";
import { useContext } from "react";
export default function Home() {
  const context = useContext(AppContext);
  return (
    <h1>
      Welcome to Arction!
      {/* <MyImageSlider />
      
      <MyHomepageFooter />
      <div>{context.user}</div> */}
    </h1>
  );
}
