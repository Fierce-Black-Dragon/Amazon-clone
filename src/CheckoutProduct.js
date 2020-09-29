import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion"

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const buttonVariants={
        hover:{
          scale:1.2,
    
       
          boxShadow: "0 0 20px rgba(33,33,33,.2)",
         transition:{
           duration:0.5,
           yoyo:Infinity
         }
        }
      }
  

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <motion.button onClick={removeFromBasket} 
                   variants={buttonVariants}
                   whileHover="hover"
                    whileTap={{ position: "relative",
                      top: 2,
                      scale: 0.8,
                      boxShadow: "none",}}
                >Remove from Basket</motion.button>
            </div>
        </div>
    )
}

export default CheckoutProduct