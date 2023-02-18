import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import axios from 'axios'

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL;

const AuthForm = () => {
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const login = (parameter) => {
        return axios.get(BACK_END_URL, {params:parameter})
        .then((res) => {
            setIsLoading(false)
            return res.data;
        })
        .then((data) => {
            console.log(data);
            authCtx.login(data[0].id)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.details)
        }); 
    }

    const signUp = (parameter) => {

        return axios.post(BACK_END_URL, parameter)
        .then((res) => {
            setIsLoading(false)
            return res.data;
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.details);
        }); 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (isLogin){
            login({ email:enteredEmail})
        } else {
            const enteredName = nameInputRef.current.value;
            signUp({
                name: enteredName,
                email: enteredEmail,
                password: enteredPassword
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
            {!isLogin ?
            (<div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='name' id='name' required ref={nameInputRef} />
            </div>):<></>}
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