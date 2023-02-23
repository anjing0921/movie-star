import React, {useContext} from 'react';
import AuthContext from '../../store/auth-context';
import LoginPage from '../Login/LoginPage';
import Trending from '../Trending/Trending'


const LogoutPage = () => {
    const authCtx = useContext(AuthContext)
    return(
        <React.Fragment>
        {!authCtx.isLoggedIn? <LoginPage /> : <Trending />}
        </React.Fragment>
    ) 
    
    
};

export default LogoutPage;