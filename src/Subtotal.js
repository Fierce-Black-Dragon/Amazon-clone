import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reudcer';
import { useHistory} from "react-router-dom";
import { motion } from "framer-motion"
function Subtotal() {
    const history =useHistory(); 
    const [{ basket }, dispatch] = useStateValue();
    const buttonVariants={
      hover:{
        scale:1.04,
  
     
        boxShadow: "0 0 20px rgba(33,33,33,.2)",
       transition:{
         duration:0.5,
         yoyo:Infinity
       }
      }
    }

  
    return (
      <div className="Subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="Subtotal__gift">
                          <input type="checkbox" id="switch" /><label for="switch"></label>
                          <p>This Order contains a Gift 🎁</p>
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
  
        <motion.button onClick={e =>history.push('/payment')}
             variants={buttonVariants}
             whileHover="hover"
          whileTap={{ position: "relative",
              top: 2,
              scale: 0.8,
              boxShadow: "none",}}
        >Proceed to Checkout</motion.button>
      </div>
    );
  }
  
  export default Subtotal;

      {/* */}