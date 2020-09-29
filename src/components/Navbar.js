import React, { useState } from 'react'
import Search from './Search'

const Navbar = ({searchRestaurants, setFavorite }) => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    //console.log(openMenu)

    const getAll = () => {
        console.log('All restuarnats')
        setFavorite(false)
    }

    const getFav = () => {
        console.log('Only Favorite restaurants')
        setFavorite(true)
    }


    return (
        <div className="nav-bar">
            {openMenu ? 
                <div onClick={toggleMenu} className="menu">
                    <ul>
                        <li onClick={getAll}><i style={{margin:'10px'}} class="fas fa-utensils"></i>all</li>
                        <li onClick={getFav}><i style={{margin:'10px'}} class="fab fa-gratipay"></i>favorites</li>
                    </ul>
                </div>
                :
                <i onClick={toggleMenu} class="fas fa-bars"></i>
            }
            
            
            <h1>List of Restaurants in Helsinki</h1>
    
        
            <Search searchRestaurants={searchRestaurants}/>
            
        </div>
    )
}

export default Navbar
