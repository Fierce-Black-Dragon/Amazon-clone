import React from 'react';
import './Checkout.css';
import Subtotal  from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { motion } from "framer-motion"

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <motion.div className="Checkout"
                initial={{y:'-100vw'}}
                animate={{y:0}}
                transition={{type:'spring', stiffness:50, delay:0.2}}
        >
                  <div className="Checkout__left">
                         <img className="Checkout_ad"  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                         <div className="checkout__lst">
                                    <h3>Hello, {user?.email}</h3>
                             <h2  className="checkout_title">
                                 Your Shopping Basket
                             </h2>
                                 
                                  
                                        {basket.map(item => (
                                       
                                        <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        />
                                    
                                      ))}
                                 
                           
                                 
                         </div>
                   </div>
                 <div className="Checkout__right">
                 <Subtotal />
            
                </div>
            
        </motion.div>
    )
}

export default Checkout
