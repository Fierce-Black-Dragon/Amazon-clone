import React from 'react'
import "./Home.css";
import Product from './Product';
import { motion } from "framer-motion"

function Home() {
    return (
        <motion.div className="home"
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{type:'spring', stiffness:50, delay:0.5}}
        >
          <div className="home_container">
                 <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
               
              <div className="home_row">
                      
                      <Product
                          id="23445930"
                          title="Amazon Echo DOT(3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                          price={98.99}
                          rating={5}
                          image="data:image/jpeg;base64,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"
                    />
                   <Product  id="4903848"  
                     title="Apple iPad Pro 2020 32.76 cm (12.9 inch) Wi-Fi + Cellular Tablet 256 GB, Space Grey
                     "price={689.99}
                     image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX355_.jpg'
                     rating={4} /> 
                   
                  
              </div> 
              
              
              <div className="home_row">
                        <Product 
                        id="4903849"
                        title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        price={1300.188}
                        rating={5}
                        /> 
                       
              </div>  
              <div className="home_row">
                    <Product
                          id="23445930"
                          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                          price={98.99}
                          rating={5}
                          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                  
                   
                   <Product
                      id="49538094"
                      title="Kenwood kMix Stand Mixer Stylish Kitchen Mixer"
                      price={239.0}
                      rating={4}
                      image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                   />
              </div> 
                <div className="home_row">
                <Product
                          id="12321341"
                          title="The Lean Startup"
                          price={11.96}
                          rating={5}
                          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    /> 
                   <Product 
                           id="4903700"
                           title="Samsung Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)"
                            price={1076.03}
                            image='https://images-na.ssl-images-amazon.com/images/I/619jtWsN0cL._SY606_.jpg'
                            rating={5} />
                     <Product
                          id="4903889"
                          title="Apple AirPods Pro"
                           price={290.79}
                           image='https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._SX466_.jpg'
                           rating={4} 
                        
                        /> 
              </div>  
              <div className="home_row">
                        <Product 
                           id="4903853"
                           title="Apple Watch Series 4 (GPS, 44mm) - Silver Aluminium Case with White Sport Band"
                            price={449.00}
                            image='data:image/jpeg;base64,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'
                            rating={4} />                         
                        
                     
                         <Product  id="4903851"  
                              title="Green Soul Monster Ultimate Series (T) Multi-Functional Chair"
                              price={258.78}
                              image='https://images-na.ssl-images-amazon.com/images/I/610pZX3W3DL._SX679_.jpg'
                              rating={4} 
                              
                          /> 
                        
                        
                      
                   
             
              </div>  
              <div className="home_row">
                        <Product
                        id='4985263'
                        title='Lenovo Legion Y540 81SY00B6IN  Processor: 9th Generation Core Intel I5-9300H, 2.4 Ghz base speed, 4.1 Ghz max speed, 4 Cores, 8Mb Smart Cache GTX 1650 4GB + 1TB HDD+256GB SSD & M200 Gaming Mouse'
                        price={1388.70}
                        image='https://images-na.ssl-images-amazon.com/images/I/81EWzgdNEGL._SL1500_.jpg'
                        rating={5}
                        
                        /> 
                       
              </div>  
          
          </div>

        </motion.div>
        
    )
}

export default Home
