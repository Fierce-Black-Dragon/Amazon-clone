import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./payment.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reudcer";
import { motion } from "framer-motion";
import { useHistory} from "react-router-dom";


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

  

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

 
       

    return (
        <div className='payment'>
            <div className='payment__container'>
            <h1>
          Checkout {<Link to="/checkout">({basket?.length} Items)</Link>}
        </h1>

                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go */}

                            <form >
                            

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                      
                                        prefix={"$"}
                                    />
                                    <button onClick={'/order'} onChange={ e => history.push('/orders')}>
                                      <span>Buy Now</span>
                                    </button>
                                </div>

                            
                                
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
{/**/}

  

{/*function Payment() {
   const [{ basket, user }, dispatch] = useStateValue();
   const history =useHistory(); 
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const  [showModal,setModal] =useState(true);
    const buttonVariants={
      hover:{
        scale:1.01,
  
     
        boxShadow: "0 0 20px rgba(33,33,33,.2)",
       transition:{
         duration:0.5,
         yoyo:Infinity
       }
      }
    }

    
  return (
    <motion.div className="payment"
              initial={{y:'-100vw'}}
            animate={{y:0}}
            transition={{type:'spring', stiffness:30, delay:0.2}}
    >  
      <div className="payment__container">
       
      
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 react lane</p>
            <p>Los Angeles ,CA</p>
          </div>
        </div>
    
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review Deliver And Items</h3>
          </div>
        
        
          <div className="payment__items">
                {basket.map((item) => (
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
   
        <div className="payment__container">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
          <form >
                             

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <motion.button    onClick={e =>history.push('/payment')}
                                       variants={buttonVariants}
                                       whileHover="hover"
                                    
                                      whileTap={{ position: "relative",
                                          top: 2,
                                          scale: 0.8,
                                          boxShadow: "none",}}
                                    >  
                                     <span>Buy Now</span>
                                     
                                       
                                    </motion.button>
                                </div>

                                
                            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Payment;
 */}