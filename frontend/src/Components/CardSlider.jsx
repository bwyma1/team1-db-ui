import { Carousel } from '@mantine/carousel';
//import { ProfCard } from "./ProfCard";
import { useState, useEffect } from 'react';
import { user } from "../Models";


//unused due to unfinished linking of frontend and backend. this would show the freatured users on the homepage
export default function CardSlider(){

const featuredProfiles =[

    new user('FeaturedUser@gmail.com', 'Featured User 1', "bio 1", 'https://via.placeholder.com/150x150' ),
    new user('FeaturedUser@gmail.com', 'Featured User 2', "bio 2", 'https://via.placeholder.com/150x150' ),
    new user('FeaturedUser@gmail.com', 'Featured User 3', "bio 3", 'https://via.placeholder.com/150x150' ),
    new user('FeaturedUser@gmail.com', 'Featured User 4', "bio 4", 'https://via.placeholder.com/150x150' )
    ]
    const [profiles, setProfiles] = useState();
    useEffect(() =>{
    
      setProfiles(featuredProfiles);
    });
    
    if(profiles == null){
    
    
      return <div>Loading</div>
    }
    
    //<ProfCard ProfilePicture={prof.ProfilePicture} id={prof.id} DisplayName={prof.DisplayName}></ProfCard>
    
      return (
    
    
        <div id="Slider_Container">
    
    <Carousel slideSize="75%" height={200} slideGap="m-5" loop ={true} dragFree withControls={true}>
          
    {profiles.map((prof, index)=>{
      <Carousel.Slide size ="33%" key={index}>
        
      </Carousel.Slide>
    })}

    </Carousel>
    
    <hr/>
    </div>
      )}