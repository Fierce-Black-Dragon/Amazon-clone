import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { motion } from "framer-motion"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
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
        <motion.div className='login'
            initial={{y:'-100vw'}}
            animate={{y:0}}
            transition={{type:'spring', stiffness:30, delay:0.2}}
         >
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <motion.button type='submit' onClick={signIn} className='login__signInButton'
                        
                        variants={buttonVariants}
                        whileHover="hover"
                      
                        whileTap={{ position: "relative",
                            top: 2,
                            scale: 0.8,
                            boxShadow: "none",}}
                    >Sign In</motion.button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <motion.button onClick={register} className='login__registerButton'
                          variants={buttonVariants}
                          whileHover="hover"
                    whileTap={{ position: "relative",
                        top: 2,
                        scale: 0.8,
                        boxShadow: "none",}}
                >Create your Amazon Account</motion.button>
            </div>
        </motion.div>
    )
}

export default Login