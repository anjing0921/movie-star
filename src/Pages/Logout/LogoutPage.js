import React, {useContext} from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import AuthContext from '../../store/auth-context';


const LogoutPage = () => {
    const authCtx = useContext(AuthContext)
    return(
        <React.Fragment>
        {!authCtx.isLoggedIn?? <AuthForm />}
        </React.Fragment>
    ) 
    
    
};

export default LogoutPage;