import React from 'react';
//import restaurants from './restaurants'

const DisplayRestaurants = (props) => {
    //console.log("props List",props)
  return (
      <div className="restaurants">
        {props.restaurantList.businesses.map((restaurant, key) => {
          return (
            <div key={key} className="cards">
              <a href={restaurant.url} target="blank">
                <img src={restaurant.image_url} alt="rest_image"></img>
                <h3><a href={restaurant.url} target="blank">{restaurant.name}</a></h3>
                <p>{restaurant.rating} Rating {restaurant.review_count} Reviews</p>
                <p>{restaurant.location.zip_code} Helsinki-Uusimaa</p>
              </a>
            </div>
          );
        })};

      </div>
    
  );
}

export default DisplayRestaurants;