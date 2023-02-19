import React, {useContext} from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import AuthContext from '../../store/auth-context';
import WatchlistPage from '../Watchlist/WatchlistPage';


const AuthPage = () => {
  const authCtx = useContext(AuthContext)
  return(
    <React.Fragment>
    {!authCtx.isLoggedIn? <AuthForm /> : <WatchlistPage />}
    </React.Fragment>
  ) 
  
  
};

export default AuthPage;