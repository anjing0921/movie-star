import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import LoginForm from '../Login/LoginForm';
import Trending from '../Trending/Trending'


const LogoutPage = () => {
    const authCtx = useContext(AuthContext)
    return(
        <React.Fragment>
        {!authCtx.isLoggedIn? <LoginForm /> : <Trending />}
        </React.Fragment>
    ) 
    
    
};

export default LogoutPage;