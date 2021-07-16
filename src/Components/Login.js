import React, {useState} from 'react';
import { setUserSession } from '../Utils/Common';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props) {
    const classes = useStyles();
    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        axios.post('https://salamander-event-manager.herokuapp.com/users/login', {
            username,
            password
        }).then( (response) => {
            setLoading(false);
            setUserSession(response.data.user, response.data.token);
            props.history.push('/dashboard');
        }).catch(e => {
            setLoading(false);
            setError('Login Failed');
            console.log(e);
        })
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const Loader = (
      <Spinner
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          justifyContent: "center",
          width: "60px",
          height: "60px",
        }}
        animation="border"
        variant="primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleLogin}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoComplete="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                  SIGN IN
                </Button>
                {error}
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2" onClick={() => {props.history.push('/signup')}}>
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
                {loading ? Loader : null }
            </form>
            </div>
            <Box mt={8}>
            <Copyright />
            </Box>
      </Container>
    );
}

export default Login