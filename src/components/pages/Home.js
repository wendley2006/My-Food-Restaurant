import React from "react";
import "../styling/Home.css";

import Hours from "./hours"
//import data from "../Files/hours.json"


//import dob from '../IMAGES/res.jpeg';
//import mob from '../IMAGES/mash.jpeg'
//import meb from '../IMAGES/241.jpeg'
//import teb from '../IMAGES/456.jpeg'
//import top from '../IMAGES/890.jpeg'


const Home = () => {

  //function storeHours(data) {
  // return  data.map((day)=>
  //  <Hours props = {day.day} 
  //  open = {day.openingHour} 
  //  close = {day.closingHour}
  //  />
  //  )
 // }
    

  return (
    <div className="home">
      
      <div className="tittle-hours">
      <h1>Welcome to Our Restaurant</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        lacus sit amet nisi rhoncus bibendum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Leo venenatis phasellus a magna parturient urna dignissim eros purus interdum enim, lacus mauris feugiat ullamcorper bibendum nascetur et facilisi natoque volutpat, sagittis hendrerit mattis faucibus vitae morbi proin netus massa varius. Auctor arcu magnis pulvinar non porta curae interdum varius nibh a, inceptos fusce ultricies aenean lobortis tincidunt cubilia ad. Cum turpis semper placerat potenti nisl cursus suspendisse dui, ultrices praesent litora dictumst per vestibulum porttitor at, sollicitudin senectus duis vivamus facilisis habitasse sapien.

      </p>
    <Hours/>
      

      </div>

      <div className="rest-picture">
    {/* <img src={dob} ></img>
      <img src={mob}></img>
       <img src={meb}></img>
       <img src={teb}></img>
       <img src={top}></img> */}
      </div>
    </div>
  );
};

export default Home;
