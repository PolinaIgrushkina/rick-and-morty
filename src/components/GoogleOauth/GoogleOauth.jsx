import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import css from './GoogleOauth.module.css';

export default function GoogleOauth() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then(res => {
          setUserData(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setUserData(null);
    setUser(null);
  };

  return (
    <div className={css.div}>
      {user ? (
        <div>
          <p className={css.email}>{userData?.email}</p>
          <button onClick={logOut} className={css.button}>
            Sign out
          </button>
        </div>
      ) : (
        <button onClick={() => login()} className={css.button}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
