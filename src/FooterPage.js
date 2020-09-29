import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css'
import { motion } from "framer-motion";

const FooterPage = () => {
    const linkVariants={
        hover:{
          scale:1.01,
          x:5,
          x:-5,
          color:"red",
         
       
         borderBottom:"0.002vh solid gray",
         transition:{
           duration:0.8,
           yoyo:Infinity
         }
        }
      }
  return (
     
    
         
          <div className="footer">
         
             <div className="footer__main">
                        <div className="footer__right">
                            <h3 className="footer__heading">Get to Know Us</h3 >
                            <hr/>
                            <ul>
                                <motion.li 
                                        variants={linkVariants}
                                        whileHover="hover"
                                ><Link>About Us</Link></motion.li>
                                <motion.li 
                                        variants={linkVariants}
                                        whileHover="hover"
                                ><Link>Careers</Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link>Press Releases</Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link>Amazon Cares</Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link>Gift a Smile</Link></motion.li>
                            </ul>
                        </div>
                            <div className="footer__right__mid">
                                <h3 className="footer__heading"> Connect with Us</h3 >
                                <hr/>
                                <ul>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link><p><FacebookIcon/><span>Facebook</span></p></Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link><p><TwitterIcon/><span>Twitter</span></p></Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link><p><InstagramIcon/><span>Instagram </span></p></Link></motion.li>
                                 <li><Link></Link></li>
                                </ul>
                            </div>
                            <div className="footer__left__mid">
                                <h3 className="footer__heading">Make  Money  with Us</h3 >
                                <hr/>
                                <ul>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                ><Link>Sell on Amazon</Link></motion.li>
                                <motion.li 
                                    variants={linkVariants}
                                    whileHover="hover"
                                >
                                    <Link>Sell under Amazon Accelerator</Link>
                                </motion.li>
                                <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Become an Affiliate</Link></motion.li>
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Fulfilment by Amazon</Link></motion.li>
                                    
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Amazon Pay on Merchants</Link></motion.li>
                                </ul>
                            </div>
                            <div className="footer__left">
                                <h3 className="footer__heading">  Let Us Help You</h3 >
                                <hr/>
                                <ul>
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>COVID-19 & Amazon</Link></motion.li>
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Your Account</Link></motion.li>
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Returns Centre</Link></motion.li>
                                    <motion.li
                                    
                                variants={linkVariants}
                                whileHover="hover"><Link>100% Purchase Protection</Link></motion.li>
                                    
                                    <motion.li 
                                variants={linkVariants}
                                whileHover="hover"><Link>Help</Link></motion.li>
                                </ul>
                            </div>
                    <footer>
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Amazon Clone  | All rights reserved 
                        </p>
                   </footer>
                   </div>
                   
          </div>
        

     
  );
}

export default FooterPage;