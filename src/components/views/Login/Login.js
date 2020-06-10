import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        Welcome
      </h2>
      <form className={styles.form} noValidate autoComplete="off">
        <TextField id="login" label="Login" />
        <TextField id="password" label="Password" type="password" />
      </form>
      <Button 
        component={Link} 
        className={styles.log} 
        to={`${process.env.PUBLIC_URL}/`}> 
        Log in
      </Button>
    </div>
  );
};

export default Login;
