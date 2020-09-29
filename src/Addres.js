import React from 'react'

export default function Addres() {
    return (
        <div>
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
       
   </div>
    )
}
