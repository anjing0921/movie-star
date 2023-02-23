import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import LoginForm from './LoginForm';
import Trending from '../Trending/Trending';


const LoginPage = () => {
    const authCtx = useContext(AuthContext)

    return(
        <React.Fragment>
        {!authCtx.isLoggedIn? <LoginForm /> : <Trending />}
        </React.Fragment>
    )   
};

export default LoginPage;