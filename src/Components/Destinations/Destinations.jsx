import React from "react";
import "./Destinations.css";

// imported icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

//Imported images
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";

// lets create an array that is gonna contain all the destination data and we loop through them

const destinations = [
  {
    id: 1,
    image: image1,
    name: "Sakura Tree",
    location: "Japan",
    rating: 4.9,
  },
  {
    id: 2,
    image: image2,
    name: "Taj Mahal",
    location: "Agra, Inida",
    rating: 4.8,
  },
  {
    id: 3,
    image: image3,
    name: "St. Mark Square",
    location: "Venice, italy",
    rating: 4.6,
  },
  {
    id: 4,
    image: image4,
    name: "Mount Fuji",
    location: "Japan",
    rating: 4.5,
  },
  {
    id: 5,
    image: image5,
    name: "Gates of Heaven",
    location: "Bali",
    rating: 4.8,
  },
  {
    id: 6,
    image: image6,
    name: "Sydney Opera House",
    location: "Sydney",
    rating: 4.4,
  },
  {
    id: 7,
    image: image7,
    name: "Colosseum",
    location: "Rome, Italy",
    rating: 4.5,
  },
  {
    id: 8,
    image: image8,
    name: "Waterfall",
    location: "Inidan Ocean",
    rating: 4.2,
  },
];

const Destinations = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">EXPLORE NOW</span>
          <h3>Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" name="" id="" placeholder="Location" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" name="" id="" placeholder="Budget" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" name="" id="" placeholder="Date" />
          </div>

          <button className="btn flex">
            <BiSearchAlt className="search-icon icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id}>
                <div className="imgDiv">
                  <img src={destination.image} alt="Destination Image" />

                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destination.location}
                      </p>
                    </div>

                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
