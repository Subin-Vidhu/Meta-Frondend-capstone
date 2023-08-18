import React from "react";
import { AppWrap } from "../../../wrapper";
import { images } from "../../../constants";
import './Specials.css';
import { MdDeliveryDining } from 'react-icons/md';



const foodItems = [
    {
        name: 'Greek Salad', 
        price: "$12.99", 
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        image: images.greekSalad,
    }, 
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        image: images.bruchetta,
    }, 
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image : images.lemonDessert,
    },
    {
        name: "New Recipie",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image : images.lemonDessert,
    },
      
]

const FoodCard = ({props}) => {
return (
        <div className="app__specials-item">
            <div
                className="app__spcecials-image"
                style={{backgroundImage: `url(${props.image})`}}>
                {/* <img className="" src={props.image} alt={props.name} /> */}
            </div>
          <div className="app_specials-details">
            <div className="app__specials-name-price">
                <h3 className="app_specials-name">{props.name}</h3>
                <p className="app_specials-price">{props.price}</p>
            </div>
            <p className="app_specials-description">{props.description}</p>
            <button className="app__specials-order">
                 Order
                 {/* <button>Bike Icon</button>  */}
                 <MdDeliveryDining className="app_specials-delivery" />
             </button>
          </div>
        </div>
);
}
const Specials = () => {
    return (
        <div
            className="app__specials"
        >
           <div className="app__specials-title-and-btn">
             <h1 className="app__specials-title">Specials</h1>
             <button className="app__specials-btn-menu">
                Online Menu
            </button>
           </div>
            <div
                className="app__specials-food-card-holder">
                <div
                    className="app__specials-food"
                >
                        {
                            foodItems.map((item) => {
                                return (
                                        <FoodCard props={item} />
                                );
                            })
                        }
                </div>
            </div>
        </div>
    );
}

export default AppWrap(Specials, 'Menu', 'app__specials');
