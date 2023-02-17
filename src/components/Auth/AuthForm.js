import { useState, useRef } from 'react';
import classes from './AuthForm.module.css';
import axios from 'axios'

const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;
const API_KEY=process.env.REACT_APP_FIREBASE_API_KEY;

const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
        url =
        `${FIREBASE_URL}signInWithPassword?key=${API_KEY}`;
    } else {
        url =
        `${FIREBASE_URL}signUp?key=${API_KEY}`;
    }

    axios.post(url, {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
    }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then((data) => {
        let errorMessage = 'Authentication failed!';
        throw new Error(errorMessage);
        });
        }
    }).then((data) => {
        console.log(data);
    })
    .catch((err) => {
        alert(err.message);
    });
    };

    return (
    <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? 'Login' : 'Create Account'}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default AuthForm;