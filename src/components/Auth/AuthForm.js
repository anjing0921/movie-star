import { useState, useRef } from 'react';
import classes from './AuthForm.module.css';
import axios from 'axios'

// const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;
// const API_KEY=process.env.REACT_APP_FIREBASE_API_KEY;

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    
    const login = (url, parameter) => {
        return axios.get(url, parameter)
        .then((res) => {
            setIsLoading(false)
            return res.data;
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err.message)
        }); 
    }

    const signUp = (url, parameter) => {
        return axios.post(url, parameter)
        .then((res) => {
            setIsLoading(false)
            return res;
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err)
            let error = 'Account already exists.'
            alert(error);
        }); 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        let url = 'https://movie-star-back-end.herokuapp.com/viewers';
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin){
            login(url, { email: enteredEmail})
        } else {
            signUp(url,{
                email: enteredEmail,
                name: enteredPassword
        })        
    }
}
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
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