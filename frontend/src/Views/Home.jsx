import MyImageSlider from "../Components/MyImageSlider";
import MyHomepageFooter from "../Components/MyHomepageFooter.jsx";
import { AppContext } from "../context";
import { useContext } from "react";

export default function Home() {
  const context = useContext(AppContext);
  return (
    <div>
      
      <MyImageSlider />
      
      <CardSlider /> 
      <MyHomepageFooter />
      <div>{context.user}</div>
    </div>
  );
}


let featuredProfiles = [

new User('featuredUser1', 'featuredUserEmail@gmail.com', 'Featered User 1', "bio 1", "https://via.placeholder.com/150x150", [], 'password',[],[],[],[] ),
new User('featuredUser2', 'featuredUser2Email@gmail.com', 'Featered User 2', "bio 2", "https://via.placeholder.com/150x150", [], 'password',[],[],[],[] ),
new User('featuredUser3', 'featuredUser3Email@gmail.com', 'Featered User 3', "bio 3", "https://via.placeholder.com/150x150", [], 'password',[],[],[],[] ),
new User('featuredUser4', 'featuredUser4Email@gmail.com', 'Featered User 4', "bio 2", "https://via.placeholder.com/150x150", [], 'password',[],[],[],[] )
]
