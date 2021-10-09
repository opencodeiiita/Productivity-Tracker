import { Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import GoogleIcon from '../images/google.svg';
function Login() {
  return (
    <Container align='center' sx={{ marginTop: 3 }}>
      <Typography variant='h4' sx={{ marginTop: 3 }}>
        Login page
      </Typography>
      <Button
        variant='outlined'
        size='large'
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        <CardMedia
          component='img'
          image={GoogleIcon}
          sx={{ width: 24, marginRight: 1 }}
        />
        <Typography variant='string'> <a href="/auth/google">Sign In With Google</a> </Typography>
      </Button>
    </Container>
  );
}
export default Login;
