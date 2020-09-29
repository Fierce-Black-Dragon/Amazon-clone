import React from 'react'
import { Link } from "react-router-dom";
import './Modal.css'

import { motion ,AnimatePresence } from "framer-motion"
const blackdrop ={
    visible:{
      opacity:1,
    },
   hidden:{
       opacity:0
   }
}
const  Modal =({showModal, setModal} )=>{
    return(
        <AnimatePresence exitBeforeEnter>
                {showModal && (
                    <motion.div
                    className="blackdrop" 
                     variants={blackdrop}
                     initial="hidden"
                     animate="visible"
                     >
                       

                    </motion.div>
                )}
        </AnimatePresence>
    )
}
export default Modal;