import React, {useContext} from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import AuthContext from '../../store/auth-context';
import Trending from '../Trending/Trending'


const LogoutPage = () => {
    const authCtx = useContext(AuthContext)
    return(
        <React.Fragment>
        {!authCtx.isLoggedIn? <AuthForm /> : <Trending />}
        </React.Fragment>
    ) 
    
    
};

export default LogoutPage;