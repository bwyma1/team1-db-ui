import React from "react";
//import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from '@mantine/carousel';
import ProfCard from "./ProfCard";
import { useState, useEffect } from "react";
import { User } from "../../Models";
//David Berberian
export default function CardSlider()
{
    const featuredProfiles = [

        new User('featuredUserEmai1l@gmail.com', 'Featered User 1', "bio 1", "https://via.placeholder.com/150x150",  'password',0),
        new User('featuredUserEmail2@gmail.com', 'Featered User 2', "bio 1", "https://via.placeholder.com/150x150",  'password',0),
        new User('featuredUserEmail3@gmail.com', 'Featered User 3', "bio 1", "https://via.placeholder.com/150x150", 'password',0),
        new User('featuredUserEmail4@gmail.com', 'Featered User 4', "bio 1", "https://via.placeholder.com/150x150", 'password',0)
        ]
    const [profiles, setProfiles] =useState();
    useEffect(() => {
        setProfiles(featuredProfiles); 
    }); 
    
    if(profiles == null)
    {
        return <div> loading... </div>
    }
    return (
        <div id="Slider_Container">

            <Carousel slideSize="75%" 
                    height={200} 
                    slideGap="m-5" 
                    loop ={true} 
                    withControls={true}>
                {profiles.map((prof, index) => (    
                    <Carousel.Slide size ="33%" key={index}>
                            <ProfCard ProfilePicture={prof.ProfilePicture}
                                   id={prof.id}
                                   DisplayName={prof.DisplayName}
                                   />
                    </Carousel.Slide>
                ))}
            </Carousel>
            <hr />
        </div>
    );
};
