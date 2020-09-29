import React, { useState, useEffect } from 'react';
//import restaurants from './restaurants'
import DisplayRestaurants from "./displayRestaurants";
import axios from "axios";
import Navbar from 

import "./App.css";



const App = () => {
  const [restaurantList, setRestaurantList] = useState({ businesses: []})
  const [search, setSearch]  = useState("restaurants")
  
  const fetchingData = async () => {
    const url = `https://famua0f1ql.execute-api.eu-central-1.amazonaws.com/dev/restaurants?searchTerm=${search}&location=helsinki`;
    const response = await axios.get(url)
    console.log("url is", url);
    console.log("response is",response.data);
    setRestaurantList(response.data);
  }

  useEffect(() => {
    fetchingData();
  }, [search])
  
  
  // Sorting restuarants by Rating
  let sortedRestaurants = '';

  const handleClick = () => {
    console.log("I was clicked")
    sortedRestaurants = restaurantList.businesses.sort((a, b) => {
      return b.rating - a.rating;
    });
    setRestaurantList({businesses:[...sortedRestaurants]}); // Now sorting function is working again :)
    console.log("result is ", sortedRestaurants);
  }

  const searchRestaurants = (e) => {
    e.preventDefault();
    console.log("Search button clicked")

    const newSearch = document.getElementById("addSearch");
    if (newSearch.value != ""){
      console.log("Your searched word is ", newSearch.value)
      setSearch(newSearch.value)
    }
  }

  return (
    <div className="Main-container">
      <h1>List of Restaurants in Helsinki</h1>
      <button onClick={handleClick}>Sort by Ratings</button>
      
      {restaurantList && <DisplayRestaurants restaurantList={restaurantList}/>}
    </div>
  );
}

export default App;

// Very first prog-Restaurant finder- By Arifa on 05-08
// function App() {
//   return (
//     <div className="container">
//       <h1>List of Restaurants in Helsinki</h1>
//       <button> This</button>
//       <div className="restaurants">
//         {restaurants.businesses.map(restaurant => {
//           return (
//             <div className="rest_items">
//               <img src={restaurant.image_url} alt="rest_image"></img>
//               <h3><a href={restaurant.url} target="blank">{restaurant.name}</a></h3>
//               <p>{restaurant.rating} Rating {restaurant.review_count} Reviews</p>
//               <p>{restaurant.location.zip_code} Helsinki</p>
//             </div>
//           );
//         })};

//       </div>
//     </div>
//   );
// }

// export default App;
