import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CheckoutProduct from './CheckoutProduct';
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
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

 

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
 
 

 
    
    
  
    return (
      <motion.div className="product"
      whileHover={{ 
         scale: 1.035,
         boxShadow: "0 0 20px rgba(33,33,33,.2)",
         marginLeft:50,
      }}
      >
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
  
        <img src={image} alt="" />
  
        <motion.button 
        onClick={addToBasket }
    
        variants={buttonVariants}
       whileHover="hover"
        whileTap={{ position: "relative",
          top: 2,
          scale: 1,
          boxShadow: "none",}}
        
        >Add to Basket</motion.button>
      </motion.div>
    );
  }
  
  export default Product;