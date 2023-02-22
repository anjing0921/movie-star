import * as React from 'react';
import { useState, useRef, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthContext from '../../store/auth-context';
import FetchContext from '../../store/fetch-context';
import axios from 'axios'

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> 
        Movie Star
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm() {
  const authCtx = useContext(AuthContext);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef(); 

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const login = (parameter) => {
    return axios.get(`${BACK_END_URL}/viewers`, {params:parameter})
    .then((res) => {
        setIsLoading(false)
        return res.data;
    })
    .then((data) => {
        authCtx.login(data[0].id)
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.details)
    }); 
  }

  const signUp = (parameter) => {

      return axios.post(`${BACK_END_URL}/viewers`, parameter)
      .then((res) => {
          setIsLoading(false)
          return res.data;
      })
      .then((data) => {
          login({ email:parameter.email})  
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? 'Login' : 'Sign Up'}
          </Typography>
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
            {!isLogin ?
            (<TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              inputRef={nameInputRef}
            />):<></>
            }
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              inputRef={emailInputRef}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={passwordInputRef}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            {isLoading && <p>Sending request...</p>}
            <Button
            type='button'
            onClick={switchAuthModeHandler}
            >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}