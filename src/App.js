import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import DisplayRestaurant from "./components/DisplayRestaurants";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  const [restaurantList, setRestaurantList] = useState({ businesses: [] });
  const [search, setSearch] = useState("restaurants");
  const [favorite, setFavorite] = useState(false) // To check if favorite restaurant selected or not
  const [isLoading, setisLoading] = useState(false) // For spinner Loading display

  const fetchingData = async () => {
    setisLoading(true) // Show loading spinner before the data is fetched
  //const url = `https://famua0f1ql.execute-api.eu-central-1.amazonaws.com/dev/restaurants?searchTerm=${search}&location=helsinki`;
  // After using Yelp Api instructions by Arifa, since the last one may cost because of using AWS, so its better to use PROXY server and use following format
  // After completing Yelp instructions and running proxy at port localhost:3001
    const url = `https://react-restaurantapp-api.herokuapp.com/restaurants?searchTerm=${search}&location=helsinki`;
    // const url = `/restaurants?searchTerm=${search}&location=helsinki`;
    const response = await axios.get(url);
    console.log("url is ", url);
    
    // response.data.businesses.forEach( res => Object.assign(res,{favarite: false}))
    response.data.businesses.forEach(res => Object.assign(res,{favorite:false})) // assign a favorite object property to each array item
    //console.log('response with fav is',response.data)
    setRestaurantList(response.data);
    setisLoading(false) // Hide loading spinner after the data is fetched
  };

  useEffect(() => {
    // get data from localStorage
    let restaurantData = localStorage.getItem('restaurantList')
    // 'restaurantList' has been set in DisplayRestaurant.js as localStorage.setItem('restaurantList', JSON.stringify(props.restaurantList))
    // convert it from JSON file
    restaurantData = JSON.parse(restaurantData)
    console.log('data from localstorage',restaurantData)

    if(restaurantData !== null){
      setRestaurantList({ businesses: [...restaurantData]})
    }else{
      fetchingData();
    }
  }, [search]);

  let sortedRestaurants = null;
  const favoriteList = restaurantList.businesses.filter(restaurant => restaurant.favorite === true )

  const handleClick = () => {
    sortedRestaurants = restaurantList.businesses.sort((a, b) => {
      return b.rating - a.rating;
    });
    setRestaurantList({businesses:[...sortedRestaurants]});
    console.log("result is ", sortedRestaurants);
  };

  const searchRestaurants = (e) => {
    e.preventDefault();
    console.log("button clicked");

    const newSearch = document.getElementById("addSearch");
    if (newSearch.value !== "") {
      console.log("data from newSearch is ", newSearch.value);
      setSearch(newSearch.value);
    }
  };

  return (
    <div className="Main-container">
      <Navbar searchRestaurants={searchRestaurants} setFavorite={setFavorite}/>

      {/* Check Spinners at the following link https://projects.lukehaas.me/css-loaders/ */}
      {/*Using the spinner when data takes time to load */}
      {isLoading && <div class="loader">Loading...</div>}

      {restaurantList && 
        <DisplayRestaurant 
          restaurantList={favorite ? favoriteList: restaurantList.businesses} />}
    </div>
  );
};

export default App;

