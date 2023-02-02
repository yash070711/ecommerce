import React, { useState } from 'react';
import Footer from './Footer';
import { Link,useNavigate} from "react-router-dom";
import Header from './Header';
import './Login.css'
import { auth } from "./firebase";


function Login() {
    const history=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
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
                    history('/')
                }
            })
            .catch(error => alert(error.message))
    }

   

         return (
       
        <div >
         <Header/>
    
         <div className='login'> 

            <div className='login__container'>
                <h1 className='bh'>Sign Up</h1>
                <Link to ='/'>
            
                <img
                    className="login__logo"

                    src='https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover.png' 
                /></Link>
                <form>
                    <h5>User Name <p4 className='o'>*</p4></h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} required />


                    <h5>Password<p4 className='o'>*</p4></h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}  required/>

                    

                    <button  type='submit'   onClick={signIn} >Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the Puma FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Puma Account</button>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Login