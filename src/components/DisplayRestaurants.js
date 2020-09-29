// /* eslint-disable jsx-a11y/alt-text */
import React,{useState} from "react";


const DisplayRestaurant = (props) => {
  
  const [fav, setFav] = useState(false)
  

  const toggleFav = (restaurant) => {
    const targetRestaurant = props.restaurantList.find(res => res.id === restaurant.id)
    console.log(targetRestaurant)
    if(targetRestaurant.id === restaurant.id){
      setFav(!fav)
    }
    
    if(!restaurant.favorite){
      restaurant.favorite = true
    }else{
      restaurant.favorite = false
    }
    localStorage.setItem('restaurantList', JSON.stringify(props.restaurantList))
  }


  return (
    <div className="restaurants">
      {props.restaurantList.map((restaurant, key) => {
        return (
          <div key={key} className="cards">
            {restaurant.favorite ? 
            <i onClick={() => toggleFav(restaurant)} className="fas fa-heart"></i>
            :  
            <i onClick={() => toggleFav(restaurant)} className="far fa-heart"></i>
            }
            
          <a href={restaurant.url} target="blank">
            <img src={restaurant.image_url} />
            <p className="restaurantName"> {restaurant.name}</p>
            <p>
              {restaurant.rating} stars {restaurant.review_count} Review
            </p>
            <p>{restaurant.location.zip_code} Helsinki</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRestaurant;
